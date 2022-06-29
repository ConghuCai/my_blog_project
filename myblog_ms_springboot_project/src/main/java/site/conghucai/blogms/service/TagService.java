package site.conghucai.blogms.service;

import java.util.List;
import java.util.Map;

public interface TagService {
    Map<String, Object> getTagList();

    Map<String, Object> updateTag(String tagName, String newName);

    Map<String, Object> deleteTag(String tagName);
}
