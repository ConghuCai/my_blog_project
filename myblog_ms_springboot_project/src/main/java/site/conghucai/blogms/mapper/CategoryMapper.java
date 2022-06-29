package site.conghucai.blogms.mapper;

import site.conghucai.blogms.model.Category;

import java.util.List;
import java.util.Map;

public interface CategoryMapper {
    int deleteByPrimaryKey(String name);

    int insert(Category record);

    int insertSelective(Category record);

    Category selectByPrimaryKey(String name);

    int updateByPrimaryKeySelective(Category record);

    int updateByPrimaryKey(Category record);

    List<Map<String, Object>> selectCategoryArticleCount();

    List<Map<String, Object>> selectAverageClickAndInterCount(int num);

    List<Map<String, Object>> selectCategoryNameList();

    int addCountByName(String id);

    int minusCountByName(String id);

    List<Map<String, Object>> selectAllCategoryMenuData();

    List<Map<String, Object>> selectAllCategoryData();
}