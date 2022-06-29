package site.conghucai.blogms.handler;

import com.alibaba.fastjson.JSON;
import org.springframework.security.web.session.SessionInformationExpiredEvent;
import org.springframework.security.web.session.SessionInformationExpiredStrategy;
import org.springframework.stereotype.Component;
import site.conghucai.blogms.enums.ProcessStatus;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Component
public class SessionExpiredStrategy implements SessionInformationExpiredStrategy {
    @Override
    public void onExpiredSessionDetected(SessionInformationExpiredEvent event) throws IOException, ServletException {
        Map<String, Object> map = new HashMap<>();
        map.put("code", ProcessStatus.SESSION_EXPIRED.getCode());
        map.put("msg", ProcessStatus.SESSION_EXPIRED.getMsg());
        map.put("success", false);
        String json = JSON.toJSONString(map);

        HttpServletResponse response = event.getResponse();
        response.setContentType("text/json;charset=utf-8");
        response.getWriter().write(json);
    }
}
