package site.conghucai.blogms.provider;

import org.springframework.stereotype.Component;
import site.conghucai.blogms.mapper.UrlPermitMapper;

import javax.annotation.Resource;
import java.util.List;

@Component
public class UrlPermitService {

    @Resource
    private UrlPermitMapper urlPermitMapper;

    public List<String> getUrlPermits(String url) {
        // 防止url是 /xx/yy/这种  不被filter匹配但是可以被controller匹配 导致绕过了安全检查
        if(url.charAt(url.length()-1) == '/'){
            url = url.substring(0, url.length()-1);
        }

        List<String> roles = urlPermitMapper.selectRolesByUrl(url);

        if(roles == null || roles.size() == 0) {
            return null;
        }

        return roles;
    }
}
