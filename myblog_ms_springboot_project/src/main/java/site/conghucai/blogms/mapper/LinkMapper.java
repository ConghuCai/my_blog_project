package site.conghucai.blogms.mapper;

import site.conghucai.blogms.model.Link;

import java.util.List;

public interface LinkMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Link record);

    int insertSelective(Link record);

    Link selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Link record);

    int updateByPrimaryKey(Link record);

    List<Link> selectAll();
}