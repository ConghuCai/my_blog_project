package site.conghucai.blogms.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import site.conghucai.blogms.config.BlogMsParamConfig;
import site.conghucai.blogms.mapper.AdminMapper;
import site.conghucai.blogms.mapper.ArticleMapper;
import site.conghucai.blogms.mapper.CategoryMapper;
import site.conghucai.blogms.mapper.TagMapper;
import site.conghucai.blogms.model.Admin;
import site.conghucai.blogms.model.Article;
import site.conghucai.blogms.service.ArticleService;
import site.conghucai.blogms.utils.ResUtil;
import site.conghucai.blogms.utils.TypeArrayUtils;

import javax.annotation.Resource;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ArticleServiceImpl implements ArticleService {

    @Resource
    private ArticleMapper articleMapper;
    @Resource
    private AdminMapper adminMapper;
    @Resource
    private TagMapper tagMapper;
    @Resource
    private CategoryMapper categoryMapper;

    private int pageSize = BlogMsParamConfig.pageSize;

    @Override
    public Map<String, Object> getArticleListByCondition(Map<String, Object> condition, Integer pageNum) {
        PageHelper.startPage(pageNum, pageSize);
        List<Map<String, Object>> articleList = articleMapper.selectArticleByCondition(condition);
        for(Map<String, Object> m : articleList){
            String id = (String) m.get("id");
            List<String> tagList = tagMapper.selectRefByArticleID(id);
            List<String> colorList = TypeArrayUtils.getTypeList(tagList);
            m.put("tag", tagList);
            m.put("tagType", colorList);
        }
        PageInfo<Map<String, Object>> articles = new PageInfo<>(articleList);
        Map<String, Object> data = new HashMap<>();

        data.put("articles", articles.getList());
        data.put("totalItem", articles.getTotal());
        data.put("pageSize", pageSize);

        return ResUtil.getReturnRes(data);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)   //?????????????????????????????????RuntimeException???IOException
    public Map<String, Object> addArticle(Article article, List<String> tags, String content) throws Exception {
        String authorName = article.getAuthor();
        Admin author = adminMapper.selectByPrimaryKey(authorName);
        String id = article.getId();
        String md = article.getMd();
        String path = BlogMsParamConfig.markdown_base;
        String fileName = path + md;

        FileWriter writer;

        if(author == null) {
            throw new RuntimeException("??????????????????????????? ??????????????????????????????");
        }
        article.setAvatar(author.getAvatar());

        // ?????????tag
        tagMapper.insertTagsBatch(tags);
        // ??????????????????
        int res1 = articleMapper.insert(article);

        List<Map<String, String>> refs = new ArrayList<>();
        for(String tag: tags) {
            Map<String, String> ref = new HashMap<>();
            ref.put("article_id", id);
            ref.put("tag", tag);

            refs.add(ref);
        }

        // ?????????????????????tag??????????????????
        int res2 = tagMapper.insertArticleTagRefRecordBatch(refs);
        if(tags != null && tags.size() != 0) {
            tagMapper.addCountByNames(tags);
        }
        // category?????????count+1
        int res0 = categoryMapper.addCountByName(article.getType());
        if(res0 != 1) {
            throw new RuntimeException("??????????????????????????? t_category count??????????????????");
        }

        if(res1 == 0 || res2 == 0) {
            throw new RuntimeException("??????????????????????????? t_article???t_ref_article_tag??????????????????");
        }

        // ??????count??????+1
        int res3 = adminMapper.updateAddCount(authorName);
        if(res3 == 0){
            throw new RuntimeException("??????????????????????????? t_admin count??????????????????");
        }

        // ????????????
        File dir = new File(path);
        if (!dir.exists()) {
            if (!dir.mkdirs()) {
                throw new IOException("??????Md???????????????????????????" + path + "??????");
            }
        }

        // ??????md??????
        writer = new FileWriter(fileName);
        writer.write("");//?????????????????????
        writer.write(content);
        writer.flush();
        writer.close();

        return ResUtil.getSuccessRes();
    }

    @Override
    @Transactional
    public Map<String, Object> updateArticle(Article article, List<String> tags) throws RuntimeException {
        List<String> oldTags = tagMapper.selectRefByArticleID(article.getId()); // ?????????tag??????

        tagMapper.insertTagsBatch(tags);    //??????tag
        articleMapper.updateByPrimaryKeySelective(article); //??????????????????
        tagMapper.deleteRefByArticleID(article.getId());    //???????????????article-tag??????

        List<Map<String, String>> refs = new ArrayList<>();
        for(String tag: tags) {
            Map<String, String> ref = new HashMap<>();
            ref.put("article_id", article.getId());
            ref.put("tag", tag);

            refs.add(ref);
        }
        // ?????????????????????tag??????????????????
        tagMapper.insertArticleTagRefRecordBatch(refs);
        //??????tag?????????count
        if(oldTags != null && oldTags.size() != 0){
            tagMapper.minusCountByNames(oldTags);
        }
        if(tags != null && tags.size() != 0) {
            tagMapper.addCountByNames(tags);
        }
        return ResUtil.getSuccessRes();
    }

    @Override
    @Transactional
    public Map<String, Object> deleteArticle(String id) {
        List<String> tags = tagMapper.selectRefByArticleID(id); // ?????????????????????tag
        Article article = articleMapper.selectByPrimaryKey(id); // ????????????

        articleMapper.deleteByPrimaryKey(id);   //??????????????????
        tagMapper.deleteRefByArticleID(id);    //???????????????article-tag??????

        categoryMapper.minusCountByName(article.getType()); //??????count-1
        if(tags != null && tags.size() != 0) {
            tagMapper.minusCountByNames(tags);  //tag count??????-1
        }

        // ??????count??????-1
        int res1 = adminMapper.updateMinusCount(article.getAuthor());
        if(res1 == 0){
            throw new RuntimeException("??????????????????????????? t_admin count??????????????????");
        }

        //????????????
        if(BlogMsParamConfig.needDelete) {
            String fileName = BlogMsParamConfig.markdown_base + article.getMd();
            File file = new File(fileName);
            boolean res = false;
            if (file.exists()) {
                res = file.delete();
                if(!res) {
                    throw new RuntimeException("?????????????????????????????????md????????????");
                }
            }
        }

        return ResUtil.getSuccessRes();
    }
}
