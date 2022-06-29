package site.conghucai.blogms.enums;

public enum ProcessStatus {
    NO_PERMIT(403, "无访问权限"),
    OK(200, "请求成功"),
    SUCCESS(200, "操作成功"),
    NO_LOGIN(403, "用户未登录"),
    LOGIN_ERROR(202, "登录失败"),
    LOGIN_SUCCESS(200, "登陆成功"),
    LOGOUT_SUCCESS(200, "已注销"),
    SESSION_EXPIRED(202, "账号已下线"),
    ERROR(500, "处理请求出错");

    private int code;
    private String msg;

    ProcessStatus(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public int getCode() {
        return code;
    }

    public String getMsg() {
        return msg;
    }

}
