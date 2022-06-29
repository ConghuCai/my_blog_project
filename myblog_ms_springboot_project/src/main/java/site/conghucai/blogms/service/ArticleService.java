package site.conghucai.blogms.service;

import site.conghucai.blogms.model.Article;

import java.util.List;
import java.util.Map;

public interface ArticleService {

    Map<String, Object> getArticleListByCondition(Map<String, Object> condition, Integer pageNum);

    Map<String, Object> addArticle(Article article, List<String> tags, String content) throws Exception;

    Map<String, Object> updateArticle(Article article, List<String> tags);

    Map<String, Object> deleteArticle(String id);

}
