package site.conghucai.blogms.handler;

import com.alibaba.fastjson.JSON;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import site.conghucai.blogms.enums.ProcessStatus;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Component
public class LoginSuccessHandler implements AuthenticationSuccessHandler {
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        Map<String, Object> map = new HashMap<>();
        map.put("code", ProcessStatus.LOGIN_SUCCESS.getCode());
        map.put("msg", ProcessStatus.LOGIN_SUCCESS.getMsg());
        map.put("success", true);
        String json = JSON.toJSONString(map);

        response.setContentType("text/json;charset=utf-8");
        response.getWriter().write(json);
    }
}
