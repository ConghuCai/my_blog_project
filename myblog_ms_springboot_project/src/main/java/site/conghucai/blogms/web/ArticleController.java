package site.conghucai.blogms.web;

import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import site.conghucai.blogms.model.Article;
import site.conghucai.blogms.service.ArticleService;
import site.conghucai.blogms.utils.DateTimeUtil;
import site.conghucai.blogms.utils.ResUtil;
import site.conghucai.blogms.utils.UUIDUtil;

import javax.annotation.Resource;
import java.security.Principal;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
public class ArticleController {

    @Resource
    private ArticleService articleService;

    @PostMapping("/blog/article/add")
    public Object addArticleApi(Principal principal, @RequestBody Map<String, Object> param) {
        if(principal == null) {
            return ResUtil.getErrorRes();
        }

        Map<String, Object> info = (Map<String, Object>) param.get("info");
        String content = (String) param.get("content");
        Article article = new Article();
        String id = UUIDUtil.getUUID();
        article.setId(id);
        article.setAuthor(principal.getName());
        article.setCarousel((Integer) info.get("carousel"));
        article.setIcon((String) info.get("icon"));
        article.setTitle((String) info.get("title"));
        article.setIntro((String) info.get("intro"));
        article.setSrc((String) info.get("img"));
        article.setType((String) info.get("kind"));
        article.setTime(DateTimeUtil.getSysTime());
        article.setMd(id+".md");
        article.setClickCount(0);
        article.setLikeCount(0);
        article.setShareCount(0);
        article.setCommentCount(0);

        List<String> tags = (List<String>) info.get("tag");

        try {
            Object res = articleService.addArticle(article, tags, content);
            return res;
        } catch (Exception e) {
            log.error(e.getMessage());
            return ResUtil.getErrorRes();
        }
    }

    @PostMapping("/blog/article/list")
    public Object getArticleListApi(Principal principal, @RequestBody Map<String, Object> param, Integer pageNum) {
        if(principal == null) {
            return ResUtil.getForbiddenRes();
        }

        Map<String, Object> condition = (Map<String, Object>) param.get("condition");
        return articleService.getArticleListByCondition(condition, pageNum);
    }

    @PostMapping("/blog/article/update")
    public Object updateArticleApi(Principal principal, @RequestBody Map<String, Object> param) {
        if(principal == null) {
            return ResUtil.getForbiddenRes();
        }

        Map<String, Object> info = (Map<String, Object>) param.get("info");
        Article article = new Article();
        article.setId((String) info.get("id"));
        article.setTitle((String) info.get("title"));
        article.setIntro((String) info.get("intro"));
        article.setType((String) info.get("type"));
        article.setIcon((String) info.get("icon"));
        article.setSrc((String) info.get("src"));
        article.setCarousel((Integer) info.get("carousel"));

        List<String> tags = (List<String>) info.get("tag");

        try {
            Object res = articleService.updateArticle(article, tags);
            return res;
        } catch (Exception e) {
            log.error(e.getMessage());
            return ResUtil.getErrorRes();
        }
    }

    @PostMapping("/blog/article/delete")
    public Object deleteArticleApi(Principal principal, String id) {
        if(principal == null) {
            return ResUtil.getForbiddenRes();
        }

        try {
            Object res = articleService.deleteArticle(id);
            return res;
        } catch (Exception e) {
            log.error(e.getMessage());
            return ResUtil.getErrorRes();
        }
    }

}
