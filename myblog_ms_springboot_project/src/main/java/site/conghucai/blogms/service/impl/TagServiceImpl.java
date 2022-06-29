package site.conghucai.blogms.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import site.conghucai.blogms.mapper.TagMapper;
import site.conghucai.blogms.model.Tag;
import site.conghucai.blogms.service.TagService;
import site.conghucai.blogms.utils.ResUtil;
import site.conghucai.blogms.utils.TypeArrayUtils;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Service
public class TagServiceImpl implements TagService {

    @Resource
    private TagMapper tagMapper;

    @Override
    public Map<String, Object> getTagList() {
        List<Map<String, Object>> data = tagMapper.selectTagNameList();
        List<String> colors = TypeArrayUtils.getTypeList(data);
        int i=0;
        for(Map<String, Object> map : data) {
            map.put("color", colors.get(i++));
        }
        return ResUtil.getReturnRes(data);
    }

    @Override
    @Transactional
    public Map<String, Object> updateTag(String tagName, String newName) {
        tagMapper.updateTagByName(tagName, newName);
        tagMapper.updateRefByName(tagName, newName);
        return ResUtil.getSuccessRes();
    }

    @Override
    @Transactional
    public Map<String, Object> deleteTag(String tagName) {
        tagMapper.deleteTagByName(tagName);
        tagMapper.deleteRefByName(tagName);
        return ResUtil.getSuccessRes();
    }

}
