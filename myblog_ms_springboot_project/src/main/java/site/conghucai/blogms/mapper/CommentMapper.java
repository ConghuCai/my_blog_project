package site.conghucai.blogms.mapper;

import site.conghucai.blogms.model.Comment;

import java.util.List;
import java.util.Map;

public interface CommentMapper {
    int deleteByPrimaryKey(String id);

    int insert(Comment record);

    int insertSelective(Comment record);

    Comment selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(Comment record);

    int updateByPrimaryKey(Comment record);

    List<Map<String, Object>>  selectAllCommentList();
}