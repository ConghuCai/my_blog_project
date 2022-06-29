package site.conghucai.blogms.service;

import java.util.Map;

public interface MessageService {

    Map<String, Object> getAllMessage();

    Map<String, Object> deleteMessage(String id);

}
