package site.conghucai.blogms.provider;

import org.springframework.security.access.ConfigAttribute;
import org.springframework.security.access.SecurityConfig;
import org.springframework.security.web.FilterInvocation;
import org.springframework.security.web.access.intercept.FilterInvocationSecurityMetadataSource;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.Collection;
import java.util.List;

@Component
public class BlogUrlSecurityMetadataSource implements FilterInvocationSecurityMetadataSource {

    @Resource
    UrlPermitService urlPermitService;

    @Override
    public Collection<ConfigAttribute> getAttributes(Object object) throws IllegalArgumentException {
        //请求地址
        HttpServletRequest request = ((FilterInvocation)object).getRequest();
        String requestUrl = request.getServletPath();


        //查询url允许访问的role
        List<String> roles = urlPermitService.getUrlPermits(requestUrl);

        if(roles == null){
            return null;
        }

        String[] attributes = new String[roles.size()];
        int i=0;
        for(String role : roles){
            attributes[i++] = role;
        }

        return SecurityConfig.createList(attributes);
    }

    @Override
    public Collection<ConfigAttribute> getAllConfigAttributes() {
        return null;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return true;
    }
}
