package site.conghucai.blogms.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.concurrent.TimeUnit;

@Component
public class BlogMsParamConfig {
    public static int ttl;
    public static TimeUnit timeUnit = TimeUnit.MINUTES;

    public static String markdown_base;
    public static int pageSize;
    public static int aboutTagID;
    public static String siteAccessName;
    public static int dayNum;
    public static int categoryNum;
    public static boolean needDelete;

    @Value("${myblog.site.need_delete_file}")
    public void setNeedDelete(boolean needDelete) {
        BlogMsParamConfig.needDelete = needDelete;
    }

    @Value("${myblog.web.stat.bar.range}")
    public void setCategoryNum(int categoryNum) {
        BlogMsParamConfig.categoryNum = categoryNum;
    }

    @Value("${myblog.web.stat.line.day}")
    public void setDayNum(int dayNum) {
        BlogMsParamConfig.dayNum = dayNum;
    }

    @Value("${myblog.site.access.name}")
    public void setSiteAccessName(String siteAccessName) {
        BlogMsParamConfig.siteAccessName = siteAccessName;
    }

    @Value("${myblog.mysql.aboutTagID}")
    public void setAboutTagID(int aboutTagID) {
        BlogMsParamConfig.aboutTagID = aboutTagID;
    }

    @Value("${myblog.web.pageSize}")
    public void setPageSize(int pageSize) {
        BlogMsParamConfig.pageSize = pageSize;
    }

    // 静态字段直接使用@Value注解无法注入值的
    // 使用@Component创建对象，并且使用set方法+@Value注解注入
    @Value("${myblog.redis.ttl}")
    public void setTtl(int ttl) {
        BlogMsParamConfig.ttl = ttl;
    }

    @Value("${myblog.markdown_base}")
    public void setMarkdown_base(String markdown_base) {
        BlogMsParamConfig.markdown_base = markdown_base;
    }

}
