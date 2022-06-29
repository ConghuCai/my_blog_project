package site.conghucai.blogms.service.impl;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import site.conghucai.blogms.enums.ProcessStatus;
import site.conghucai.blogms.mapper.AboutInfoMapper;
import site.conghucai.blogms.mapper.AdminMapper;
import site.conghucai.blogms.mapper.BlogTitleMapper;
import site.conghucai.blogms.mapper.MsMenuMapper;
import site.conghucai.blogms.model.AboutInfo;
import site.conghucai.blogms.model.BlogTitle;
import site.conghucai.blogms.model.MsMenu;
import site.conghucai.blogms.service.PublicService;
import site.conghucai.blogms.utils.ResUtil;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

@Service
public class PublicServiceImpl implements PublicService {

    @Resource
    private BlogTitleMapper blogTitleMapper;
    @Resource
    private AdminMapper adminMapper;
    @Resource
    private MsMenuMapper msMenuMapper;
    @Resource
    private AboutInfoMapper aboutInfoMapper;
    @Resource
    private RedisTemplate<Object, Object> redis;

    @Override
    public Map<String, Object> getLoginPage() {
        if(redis.hasKey("login_page")) {
            return (Map<String, Object>) redis.opsForValue().get("login_page");
        }
        Map res = blogTitleMapper.selectBlogAvatarAndBackground("blog");
        if(res == null){
            return ResUtil.getErrorRes();
        }
        Map<String, Object> map = new HashMap<>();
        map.put("code", ProcessStatus.OK.getCode());
        map.put("data", res);

        redis.opsForValue().set("login_page", map, 24, TimeUnit.HOURS);
        return map;
    }

    @Override
    public Map<String, Object> checkLogin(String username) {
        if (username.equals("")) {
            Map<String, Object> res = new HashMap<>();
            res.put("code", ProcessStatus.NO_PERMIT.getCode());
            res.put("success", false);
            res.put("msg", ProcessStatus.NO_PERMIT.getMsg());
            return res;
        }

        Map data = adminMapper.selectUserInfo(username);
        Map<String, Object> res = new HashMap<>();
        if (data == null) {
            res.put("code", ProcessStatus.NO_PERMIT.getCode());
            res.put("success", false);
            res.put("msg", ProcessStatus.NO_PERMIT.getMsg());
            return res;
        }

        res.put("code", ProcessStatus.OK.getCode());
        res.put("success", true);
        res.put("user", data);
        return res;
    }

    @Override
    public Map<String, Object> getMenuData() {
        if(redis.hasKey("ms_menu_data")) {
            return (Map<String, Object>) redis.opsForValue().get("ms_menu_data");
        }

        List<MsMenu> menuList = msMenuMapper.selectAllMenuByOrder();
        BlogTitle blogTitle = blogTitleMapper.selectByPrimaryKey("blog");

        if(menuList == null || menuList.size() == 0 || blogTitle == null){
            return ResUtil.getErrorRes();
        }

        Map<String, Object> data = new HashMap<>();
        data.put("title", blogTitle.getBlogname());
        data.put("sname", blogTitle.getShortname());
        data.put("logo", blogTitle.getBlogavatar());

        int index = 0;
        for(; index < menuList.size() && menuList.get(index).getFather() == 0; index++);

        List<Map<String, Object>> menu = new ArrayList<>();
        int subIndex = index;
        for(int i=0; i < index; i++) {
            Map<String, Object> fatherMenu = new HashMap<>();
            fatherMenu.put("label", menuList.get(i).getLabel());
            fatherMenu.put("icon", menuList.get(i).getIcon());

            int id = menuList.get(i).getId();
            List<Map<String, String>> children = new ArrayList<>();
            for(;subIndex < menuList.size() && menuList.get(subIndex).getFather() == id; subIndex++) {
                Map<String, String> childrenMenu = new HashMap<>();
                childrenMenu.put("path", menuList.get(subIndex).getPath());
                childrenMenu.put("label", menuList.get(subIndex).getLabel());
                childrenMenu.put("icon", menuList.get(subIndex).getIcon());

                children.add(childrenMenu);
            }

            fatherMenu.put("children", children);
            menu.add(fatherMenu);
        }

        data.put("menu", menu);

        Map<String, Object> res = new HashMap<>();
        res.put("code", ProcessStatus.OK.getCode());
        res.put("data", data);

        redis.opsForValue().set("ms_menu_data", res, 24, TimeUnit.HOURS);
        return res;
    }

    @Override
    public Map<String, Object> getAboutInfo() {
        AboutInfo data = aboutInfoMapper.selectByPrimaryKey("ms");
        return ResUtil.getReturnRes(data);
    }
}
