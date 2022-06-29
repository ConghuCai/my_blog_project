package site.conghucai.blogms.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import site.conghucai.blogms.mapper.LinkMapper;
import site.conghucai.blogms.model.Link;
import site.conghucai.blogms.service.LinkService;
import site.conghucai.blogms.utils.ResUtil;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Service
public class LinkServiceImpl implements LinkService {

    @Resource
    private LinkMapper linkMapper;

    @Override
    public Map<String, Object> getAllLinkList() {
        List<Link> data = linkMapper.selectAll();
        return ResUtil.getReturnRes(data);
    }

    @Override
    @Transactional
    public Map<String, Object> updateLink(Link link) throws RuntimeException {
        linkMapper.updateByPrimaryKeySelective(link);
        return ResUtil.getSuccessRes();
    }

    @Override
    @Transactional
    public Map<String, Object> addLink(Link link) throws RuntimeException {
        linkMapper.insertSelective(link);
        return ResUtil.getSuccessRes();
    }

    @Override
    @Transactional
    public Map<String, Object> deleteLink(Integer id) throws RuntimeException {
        linkMapper.deleteByPrimaryKey(id);
        return ResUtil.getSuccessRes();
    }
}
