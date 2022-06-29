package site.conghucai.blogms.service.impl;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import site.conghucai.blogms.mapper.CategoryMapper;
import site.conghucai.blogms.model.Category;
import site.conghucai.blogms.service.CategoryService;
import site.conghucai.blogms.utils.DateTimeUtil;
import site.conghucai.blogms.utils.ResUtil;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Resource
    private CategoryMapper categoryMapper;

    @Override
    public Map<String, Object> getCategoryList() {
        List<Map<String, Object>> data = categoryMapper.selectCategoryNameList();
        Map<String, Object> res = ResUtil.getReturnRes(data);
        return res;
    }

    @Override
    public Map<String, Object> getMenuCategoryList() {
        List<Map<String, Object>> menuData = categoryMapper.selectAllCategoryMenuData();
        List<Map<String, Object>> kindData = categoryMapper.selectAllCategoryData();
        Integer menuID = Integer.parseInt(menuData.get(0).get("id").toString());

        Map<String, Object> data = new HashMap<>();
        data.put("menuID", menuID);
        data.put("menuData", menuData);
        data.put("kindData", kindData);

        return ResUtil.getReturnRes(data);
    }

    @Override
    @Transactional
    public Map<String, Object> updateCategory(Category category) {
        categoryMapper.updateByPrimaryKeySelective(category);
        return ResUtil.getSuccessRes();
    }

    @Override
    @Transactional
    public Map<String, Object> deleteCategory(String categoryName) {
        Category category = categoryMapper.selectByPrimaryKey(categoryName);
        if(category.getCount() > 0) {
            return ResUtil.getErrorRes();
        }

        categoryMapper.deleteByPrimaryKey(categoryName);
        return ResUtil.getSuccessRes();
    }

    @Override
    @Transactional
    public Map<String, Object> addCategory(Category category) {
        category.setDate(DateTimeUtil.getSysDate());
        category.setPath("/" + category.getName());
        categoryMapper.insertSelective(category);
        return ResUtil.getSuccessRes();
    }
}
