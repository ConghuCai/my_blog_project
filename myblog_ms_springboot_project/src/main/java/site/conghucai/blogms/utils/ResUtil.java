package site.conghucai.blogms.utils;

import site.conghucai.blogms.enums.ProcessStatus;

import java.util.HashMap;
import java.util.Map;

public class ResUtil {

    private ResUtil() {
    }

    public static Map<String, Object> getErrorRes() {
        Map<String, Object> map = new HashMap<>();
        map.put("code", ProcessStatus.ERROR.getCode());
        map.put("success", false);
        map.put("msg", ProcessStatus.ERROR.getMsg());
        return map;
    }

    public static Map<String, Object> getSuccessRes() {
        Map<String, Object> map = new HashMap<>();
        map.put("code", ProcessStatus.SUCCESS.getCode());
        map.put("success", true);
        map.put("msg", ProcessStatus.SUCCESS.getMsg());
        return map;
    }

    public static Map<String, Object> getReturnRes(Object data) {
        Map<String, Object> res = new HashMap<>();
        res.put("code", ProcessStatus.OK.getCode());
        res.put("data", data);
        return res;
    }

    public static Map<String, Object> getForbiddenRes() {
        Map<String, Object> map = new HashMap<>();
        map.put("code", ProcessStatus.NO_PERMIT.getCode());
        map.put("success", false);
        map.put("msg", ProcessStatus.NO_PERMIT.getMsg());
        return map;
    }

}
