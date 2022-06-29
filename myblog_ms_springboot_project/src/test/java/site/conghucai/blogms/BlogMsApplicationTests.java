package site.conghucai.blogms;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import site.conghucai.blogms.config.BlogMsParamConfig;
import site.conghucai.blogms.enums.ProcessStatus;
import site.conghucai.blogms.mapper.*;
import site.conghucai.blogms.model.Admin;
import site.conghucai.blogms.provider.UrlPermitService;
import site.conghucai.blogms.provider.UserSecurityService;
import site.conghucai.blogms.service.AdminService;
import site.conghucai.blogms.service.ArticleService;
import site.conghucai.blogms.service.HomeService;
import site.conghucai.blogms.service.PublicService;
import site.conghucai.blogms.utils.DateTimeUtil;
import site.conghucai.blogms.utils.NumFormatUtil;

import javax.annotation.Resource;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.*;

@SpringBootTest
class BlogMsApplicationTests {

    @Test
    void passwordEncode() {
    }

}
