package site.conghucai.blogms.provider;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import site.conghucai.blogms.mapper.AdminMapper;
import site.conghucai.blogms.model.Admin;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Component
public class UserSecurityService implements UserDetailsService {

    @Resource
    private AdminMapper adminMapper;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if(username == null){
            throw new UsernameNotFoundException("username is null!");
        }
        Admin admin = adminMapper.selectByPrimaryKey(username);	//查询用户的记录
        if(admin == null){
            throw new UsernameNotFoundException("the account: " + username + " not found!");
        }


        List<GrantedAuthority> authorities = new ArrayList<>();
        //对于RBAC，role名称前必须加上"ROLE_"
        //框架是根据前缀是否有ROLE_来判断这是角色信息还是权限信息的。
        authorities.add(new SimpleGrantedAuthority("ROLE_" + admin.getRole()));

        //将查询到的信息封装到UserDetail的实现类：User里面。
        User user = new User(username, admin.getPassword(), admin.getEnable(),
                true, true, admin.getNotLocked(),
                authorities);

        return user;
    }
}
