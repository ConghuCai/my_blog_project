package site.conghucai.blogms.service;

import java.util.Map;

public interface CommentService {
    Map<String, Object> getAllCommentList();

    Map<String, Object> deleteComment(String id);
}
