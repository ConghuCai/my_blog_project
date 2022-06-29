package site.conghucai.blogms.mapper;

import site.conghucai.blogms.model.UrlPermit;

import java.util.List;

public interface UrlPermitMapper {
    int deleteByPrimaryKey(String url);

    int insert(UrlPermit record);

    int insertSelective(UrlPermit record);

    UrlPermit selectByPrimaryKey(String url);

    int updateByPrimaryKeySelective(UrlPermit record);

    int updateByPrimaryKey(UrlPermit record);

    List<String> selectRolesByUrl(String url);
}