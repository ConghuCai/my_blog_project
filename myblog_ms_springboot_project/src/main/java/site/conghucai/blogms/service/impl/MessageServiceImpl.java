package site.conghucai.blogms.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import site.conghucai.blogms.mapper.MessageMapper;
import site.conghucai.blogms.service.MessageService;
import site.conghucai.blogms.utils.ResUtil;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Service
public class MessageServiceImpl implements MessageService {

    @Resource
    private MessageMapper messageMapper;

    @Override
    public Map<String, Object> getAllMessage() {
        List<Map<String, Object>> data = messageMapper.selectAllMessageList();
        return ResUtil.getReturnRes(data);
    }

    @Override
    @Transactional
    public Map<String, Object> deleteMessage(String id) throws RuntimeException {
        int res = messageMapper.deleteByPrimaryKey(id);
        return res > 0 ? ResUtil.getSuccessRes() : ResUtil.getErrorRes();
    }
}
