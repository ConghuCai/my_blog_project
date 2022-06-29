package site.conghucai.blogms.mapper;

import site.conghucai.blogms.model.Article;

import java.util.List;
import java.util.Map;

public interface ArticleMapper {
    int deleteByPrimaryKey(String id);

    int insert(Article record);

    int insertSelective(Article record);

    Article selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(Article record);

    int updateByPrimaryKey(Article record);

    Map<String, Object> selectArticleCount();

    List<Map<String, Object>> selectArticleStat();

    List<Map<String, Object>> selectArticleByCondition(Map<String, Object> condition);

    int minusArticleCommentCount(String articleID);
}