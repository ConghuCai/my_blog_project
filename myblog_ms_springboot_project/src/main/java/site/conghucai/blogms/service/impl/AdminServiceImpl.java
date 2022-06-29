package site.conghucai.blogms.service.impl;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import site.conghucai.blogms.mapper.AdminMapper;
import site.conghucai.blogms.model.Admin;
import site.conghucai.blogms.service.AdminService;
import site.conghucai.blogms.utils.ResUtil;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Service
public class AdminServiceImpl implements AdminService {

    @Resource
    private AdminMapper adminMapper;
    @Resource
    private PasswordEncoder encoder;

    @Override
    public Map<String, Object> getAllAdminList() {
        List<Map<String, Object>> data = adminMapper.selectAllAdminList();
        return ResUtil.getReturnRes(data);
    }

    @Override
    @Transactional
    public Map<String, Object> updateAdmin(Admin admin) throws RuntimeException {
        String pwdEncoded = encoder.encode(admin.getPassword());
        admin.setPassword(pwdEncoded);
        adminMapper.updateByPrimaryKeySelective(admin);
        return ResUtil.getSuccessRes();
    }

    @Override
    @Transactional
    public Map<String, Object> addAdmin(Admin admin) throws RuntimeException  {
        String pwdEncoded = encoder.encode(admin.getPassword());
        admin.setPassword(pwdEncoded);
        adminMapper.insertSelective(admin);
        return ResUtil.getSuccessRes();
    }

    @Override
    @Transactional
    public Map<String, Object> deleteAdmin(String name) throws RuntimeException  {
        Admin admin = adminMapper.selectByPrimaryKey(name);
        if(admin == null || admin.getCount() != 0) {
            return ResUtil.getErrorRes();
        }

        adminMapper.deleteByPrimaryKey(name);
        return ResUtil.getSuccessRes();
    }
}
