package site.conghucai.blogms.service;

import java.util.Map;

public interface PublicService {
    Map<String, Object> getLoginPage();

    Map<String, Object> checkLogin(String username);

    Map<String, Object> getMenuData();

    Map<String, Object> getAboutInfo();
}
