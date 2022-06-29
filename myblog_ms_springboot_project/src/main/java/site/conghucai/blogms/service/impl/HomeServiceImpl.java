package site.conghucai.blogms.service.impl;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import site.conghucai.blogms.config.BlogMsParamConfig;
import site.conghucai.blogms.enums.ProcessStatus;
import site.conghucai.blogms.mapper.*;
import site.conghucai.blogms.service.HomeService;
import site.conghucai.blogms.utils.ResUtil;
import site.conghucai.blogms.utils.NumFormatUtil;

import javax.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class HomeServiceImpl implements HomeService {

    @Resource
    private CategoryMapper categoryMapper;
    @Resource
    private MsMenuMapper msMenuMapper;
    @Resource
    private ArticleMapper articleMapper;
    @Resource
    private MessageMapper messageMapper;
    @Resource
    private TagMapper tagMapper;
    @Resource
    private GiteeUserMapper userMapper;
    @Resource
    private RedisTemplate<Object, Object> redis;

    @Override
    public Map<String, Object> getPieData() {
        List<Map<String, Object>> dbData = categoryMapper.selectCategoryArticleCount();
        List<Object> legend = new ArrayList<>();
        List<Object> value = new ArrayList<>();

        dbData.forEach( d -> {
            legend.add(d.get("label"));
            value.add(d.get("count"));
        } );

        if(dbData.size() == 0){
            return ResUtil.getErrorRes();
        }

        Map<String, Object> res = new HashMap<>();
        Map<String, Object> data = new HashMap<>();
        data.put("legend", legend);
        data.put("value", value);

        res.put("code", ProcessStatus.OK.getCode());
        res.put("data", data);
        return res;
    }

    @Override
    public Map<String, Object> getCountData() {
        String[][] stat = new String[6][2];
        Map<String, String> layout = msMenuMapper.selectHomeCountLayout();

        List<Map<String, String>> data = new ArrayList<>();

        // 站点访问量
        int count = 0;
        if(!redis.opsForHash().hasKey(BlogMsParamConfig.siteAccessName, "count")) {
            Set<Object> set = redis.opsForHash().keys(BlogMsParamConfig.siteAccessName);
            Iterator<Object> iterator = set.iterator();
            while(iterator.hasNext()) {
                String num = (String) redis.opsForHash().get(BlogMsParamConfig.siteAccessName, iterator.next() + "");
                count += Integer.parseInt(num);
            }
            redis.opsForHash().put(BlogMsParamConfig.siteAccessName, "count", count + "");
        } else {
            count = Integer.parseInt(
                    (String)redis.opsForHash().get(BlogMsParamConfig.siteAccessName, "count"));
        }
        stat[0][0] = "站点访问量";
        stat[0][1] = NumFormatUtil.getFormatString(count + "");

        // 博文阅读量 评论 留言 博文总数 点赞转发
        Map<String, Object> stats = articleMapper.selectArticleCount();
        stat[4][0] = "博文总数";
        stat[4][1] = NumFormatUtil.getFormatString(stats.get("articleCount").toString());
        stat[1][0] = "博文阅读量";
        stat[1][1] = NumFormatUtil.getFormatString(stats.get("readCount").toString());
        stat[5][0] = "点赞转发";
        stat[5][1] = NumFormatUtil.getFormatString(stats.get("lsCount").toString());
        stat[2][0] = "评论";
        stat[2][1] = NumFormatUtil.getFormatString(stats.get("commentCount").toString());

        // 留言
        Integer messages = messageMapper.getCount();
        stat[3][0] = "留言";
        stat[3][1] = NumFormatUtil.getFormatString(messages.toString());

        for(int i=0; i<6; i++) {
            Map<String, String> map = new HashMap<>();
            map.put("name", stat[i][0]);
            map.put("value", stat[i][1]);
            map.put("color", layout.get((i%3) + ""));
            map.put("icon", layout.get((i%3)+3 + ""));
            data.add(map);
        }

        Map<String, Object> res = new HashMap<>();
        res.put("code", ProcessStatus.OK.getCode());
        res.put("data", data);

        return res;
    }

    @Override
    public Map<String, Object> getLineData() {
        int dayNum = BlogMsParamConfig.dayNum;

        Calendar calendar = Calendar.getInstance();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        calendar.setTime(new Date());
        String[] dates = new String[dayNum];

        for(int i=dayNum-1; i>=0; i--) {
            dates[i] = formatter.format(calendar.getTime());
            calendar.add(Calendar.DATE,-1);
        }

        List<String> legend = new ArrayList<>();
        List<String> axis = new ArrayList<>();
        List<List<String>> value = new ArrayList<>();

        List<String> stat1 = new ArrayList<>();
        List<String> stat2 = new ArrayList<>();
        value.add(stat1);
        value.add(stat2);

        legend.add("访问量");
        legend.add("评论留言");

        for(String date: dates) {
            axis.add(date);

            String statNum1 = "0";
            if(redis.opsForHash().hasKey(BlogMsParamConfig.siteAccessName, date)){
                statNum1 = (String) redis.opsForHash().get(BlogMsParamConfig.siteAccessName, date);
            }
            stat1.add(statNum1);

            Map<String, Object> statRes = messageMapper.selectMessageAndCommentCountByDay(date);
            String statNum2 = statRes.get("res").toString();
            stat2.add(statNum2);
        }

        Map<String, Object> data = new HashMap<>();
        data.put("legend", legend);
        data.put("axis", axis);
        data.put("value", value);

        Map<String, Object> res = new HashMap<>();
        res.put("code", ProcessStatus.OK.getCode());
        res.put("data", data);

        return res;
    }

    @Override
    public Map<String, Object> getBarData() {
        int categoryNum = BlogMsParamConfig.categoryNum;

        List<String> legend = new ArrayList<>();
        List<String> axis = new ArrayList<>();
        List<List<String>> value = new ArrayList<>();

        List<String> stat1 = new ArrayList<>();
        List<String> stat2 = new ArrayList<>();
        value.add(stat1);
        value.add(stat2);

        legend.add("点击阅读");
        legend.add("点赞转发留言");

        List<Map<String, Object>> stats = categoryMapper.selectAverageClickAndInterCount(categoryNum);

        for(Map<String, Object> stat: stats) {
            axis.add((String) stat.get("label"));
            if(stat.containsKey("click")) {
                stat1.add(NumFormatUtil.getDecimalString(stat.get("click").toString()));
            } else {
                stat1.add("0");
            }
            if(stat.containsKey("inter")) {
                stat2.add(NumFormatUtil.getDecimalString(stat.get("inter").toString()));
            } else {
                stat2.add("0");
            }
        }

        Map<String, Object> data = new HashMap<>();
        data.put("legend", legend);
        data.put("axis", axis);
        data.put("value", value);

        Map<String, Object> res = new HashMap<>();
        res.put("code", ProcessStatus.OK.getCode());
        res.put("data", data);
        return res;
    }

    @Override
    public Map<String, Object> getPopArticleList() {
        List<Map<String, Object>> data = articleMapper.selectArticleStat();

        for(Map<String, Object> map: data) {
            map.put("click", NumFormatUtil.getFormatString(map.get("click").toString()));
            map.put("likeShare", NumFormatUtil.getFormatString(map.get("likeShare").toString()));
            map.put("comment", NumFormatUtil.getFormatString(map.get("comment").toString()));
        }

        Map<String, Object> res = new HashMap<>();
        res.put("code", ProcessStatus.OK.getCode());
        res.put("data", data);
        return res;
    }

    @Override
    public Map<String, Object> getPopCategoryList() {
        int categoryNum = 5;

        List<Map<String, String>> data = new ArrayList<>();
        List<Map<String, Object>> stats = categoryMapper.selectAverageClickAndInterCount(categoryNum);

        for(Map<String, Object> stat: stats) {
            Map<String, String> map = new HashMap<>();

            map.put("name", (String) stat.get("label"));

            if(stat.containsKey("click")) {
                map.put("aClick", NumFormatUtil.getDecimalString(stat.get("click").toString()));
            } else {
                map.put("aClick", "0");
            }
            if(stat.containsKey("inter")) {
                map.put("aInter", NumFormatUtil.getDecimalString(stat.get("inter").toString()));
            } else {
                map.put("aInter", "0");
            }

            data.add(map);
        }

        Map<String, Object> res = new HashMap<>();
        res.put("code", ProcessStatus.OK.getCode());
        res.put("data", data);
        return res;
    }

    @Override
    public Map<String, Object> getPopTagList() {
        List<Map<String, Object>> data = tagMapper.selectTagArticleStat();

        for(Map<String, Object> map: data) {
            if(map.containsKey("aClick"))
                map.put("aClick", NumFormatUtil.getDecimalString(map.get("aClick").toString()));
            else
                map.put("aClick", "0");

            if(map.containsKey("aInter"))
                map.put("aInter", NumFormatUtil.getDecimalString(map.get("aInter").toString()));
            else
                map.put("aInter", "0");
        }

        Map<String, Object> res = new HashMap<>();
        res.put("code", ProcessStatus.OK.getCode());
        res.put("data", data);
        return res;
    }

    @Override
    public Map<String, Object> getImportantUserList() {
        List<Map<String, Object>> data = userMapper.selectUserInterStat();

        Map<String, Object> res = new HashMap<>();
        res.put("code", ProcessStatus.OK.getCode());
        res.put("data", data);
        return res;
    }

}
