package site.conghucai.blogms.mapper;

import site.conghucai.blogms.model.GiteeUser;

import java.util.List;
import java.util.Map;

public interface GiteeUserMapper {
    int deleteByPrimaryKey(String login);

    int insert(GiteeUser record);

    int insertSelective(GiteeUser record);

    GiteeUser selectByPrimaryKey(String login);

    int updateByPrimaryKeySelective(GiteeUser record);

    int updateByPrimaryKey(GiteeUser record);

    List<Map<String, Object>> selectUserInterStat();

    List<Map<String, Object>> selectAllUserList();
}