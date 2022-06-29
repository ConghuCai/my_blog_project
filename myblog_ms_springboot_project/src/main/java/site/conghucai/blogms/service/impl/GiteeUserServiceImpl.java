package site.conghucai.blogms.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import site.conghucai.blogms.mapper.GiteeUserMapper;
import site.conghucai.blogms.service.GiteeUserService;
import site.conghucai.blogms.utils.ResUtil;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Service
public class GiteeUserServiceImpl implements GiteeUserService {

    @Resource
    private GiteeUserMapper giteeUserMapper;

    @Override
    public Map<String, Object> getAllUserList() {
        List<Map<String, Object>> data = giteeUserMapper.selectAllUserList();

        return ResUtil.getReturnRes(data);
    }

    @Override
    @Transactional
    public Map<String, Object> deleteUser(String login) throws RuntimeException {
        int res = giteeUserMapper.deleteByPrimaryKey(login);
        return res > 0 ? ResUtil.getSuccessRes(): ResUtil.getErrorRes();
    }
}
