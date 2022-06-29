package site.conghucai.blogms.mapper;

import site.conghucai.blogms.model.BlogTitle;

import java.util.Map;

public interface BlogTitleMapper {
    int deleteByPrimaryKey(String id);

    int insert(BlogTitle record);

    int insertSelective(BlogTitle record);

    BlogTitle selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(BlogTitle record);

    int updateByPrimaryKey(BlogTitle record);

    Map selectBlogAvatarAndBackground(String id);
}