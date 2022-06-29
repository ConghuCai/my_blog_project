package site.conghucai.blogms.mapper;

import site.conghucai.blogms.model.Message;

import java.util.List;
import java.util.Map;

public interface MessageMapper {
    int deleteByPrimaryKey(String id);

    int insert(Message record);

    int insertSelective(Message record);

    Message selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(Message record);

    int updateByPrimaryKey(Message record);

    Integer getCount();

    Map<String, Object> selectMessageAndCommentCountByDay(String date);

    List<Map<String, Object>> selectAllMessageList();
}