package site.conghucai.blogms.service;

import java.util.Map;

public interface HomeService {
    Map<String, Object> getPieData();

    Map<String, Object> getCountData();

    Map<String, Object> getLineData();

    Map<String, Object> getBarData();

    Map<String, Object> getPopArticleList();

    Map<String, Object> getPopCategoryList();

    Map<String, Object> getPopTagList();

    Map<String, Object> getImportantUserList();

}
