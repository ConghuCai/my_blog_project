package site.conghucai.blogms.mapper;

import site.conghucai.blogms.model.Admin;

import java.util.List;
import java.util.Map;

public interface AdminMapper {
    int deleteByPrimaryKey(String name);

    int insert(Admin record);

    int insertSelective(Admin record);

    Admin selectByPrimaryKey(String name);

    int updateByPrimaryKeySelective(Admin record);

    int updateByPrimaryKey(Admin record);

    Map selectUserInfo(String username);

    int updateAddCount(String name);

    int updateMinusCount(String name);

    List<Map<String, Object>> selectAllAdminList();

}