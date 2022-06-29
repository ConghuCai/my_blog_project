package site.conghucai.blogms.handler;

import com.alibaba.fastjson.JSON;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
import site.conghucai.blogms.enums.ProcessStatus;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Component
public class NoLoginEntryPoint implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        Map<String, Object> map = new HashMap<>();
        map.put("code", ProcessStatus.NO_LOGIN.getCode());
        map.put("msg", ProcessStatus.NO_LOGIN.getMsg());
        map.put("success", false);
        String json = JSON.toJSONString(map);

        response.setContentType("text/json;charset=utf-8");
        response.getWriter().write(json);
    }
}
