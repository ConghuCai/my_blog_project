package site.conghucai.blogms.service;

import site.conghucai.blogms.model.Category;

import java.util.Map;

public interface CategoryService {
    Map<String, Object> getCategoryList();

    Map<String, Object> getMenuCategoryList();

    Map<String, Object> updateCategory(Category category);

    Map<String, Object> deleteCategory(String categoryName);

    Map<String, Object> addCategory(Category category);
}
