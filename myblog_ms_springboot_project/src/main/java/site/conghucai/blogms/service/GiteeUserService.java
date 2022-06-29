package site.conghucai.blogms.service;

import java.util.Map;

public interface GiteeUserService {
    Map<String, Object> getAllUserList();

    Map<String, Object> deleteUser(String login);

}
