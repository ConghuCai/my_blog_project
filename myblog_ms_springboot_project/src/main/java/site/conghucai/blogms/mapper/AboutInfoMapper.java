package site.conghucai.blogms.mapper;

import site.conghucai.blogms.model.AboutInfo;

public interface AboutInfoMapper {
    int deleteByPrimaryKey(String id);

    int insert(AboutInfo record);

    int insertSelective(AboutInfo record);

    AboutInfo selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(AboutInfo record);

    int updateByPrimaryKey(AboutInfo record);
}