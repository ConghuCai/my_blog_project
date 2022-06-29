package site.conghucai.blogms.web;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import site.conghucai.blogms.model.Admin;
import site.conghucai.blogms.model.Link;
import site.conghucai.blogms.service.AdminService;
import site.conghucai.blogms.service.LinkService;
import site.conghucai.blogms.utils.ResUtil;

import javax.annotation.Resource;
import java.security.Principal;
import java.util.Map;

@RestController
@Slf4j
public class SiteController {
    @Resource
    private LinkService linkService;
    @Resource
    private AdminService adminService;

    @GetMapping("/site/link/list")
    public Object getLinkApi(Principal principal) {
        if(principal == null) {
            return ResUtil.getForbiddenRes();
        }
        return linkService.getAllLinkList();
    }

    @PostMapping("/site/link/add")
    public Object addLinkApi(Principal principal, @RequestBody Map<String, Object> param) {
        if(principal == null) {
            return ResUtil.getForbiddenRes();
        }

        Map<String, Object> info = (Map<String, Object>) param.get("info");
        Link link = new Link();
        link.setName((String) info.get("name"));
        link.setUrl((String) info.get("url"));

        try {
            Object res = linkService.addLink(link);
            return res;
        } catch (Exception e) {
            log.error(e.getMessage());
            return ResUtil.getErrorRes();
        }
    }

    @PostMapping("/site/link/update")
    public Object updateLinkApi(Principal principal, @RequestBody Map<String, Object> param) {
        if(principal == null) {
            return ResUtil.getForbiddenRes();
        }

        Map<String, Object> info = (Map<String, Object>) param.get("info");
        Link link = new Link();
        link.setId(Integer.parseInt(info.get("id").toString()));
        link.setName((String) info.get("name"));
        link.setUrl((String) info.get("url"));

        try {
            Object res = linkService.updateLink(link);
            return res;
        } catch (Exception e) {
            log.error(e.getMessage());
            return ResUtil.getErrorRes();
        }
    }

    @PostMapping("/site/link/delete")
    public Object deleteLinkApi(Principal principal, String id) {
        if(principal == null) {
            return ResUtil.getForbiddenRes();
        }

        Integer linkID = Integer.parseInt(id);

        try {
            Object res = linkService.deleteLink(linkID);
            return res;
        } catch (Exception e) {
            log.error(e.getMessage());
            return ResUtil.getErrorRes();
        }
    }

    @GetMapping("/site/admin/list")
    public Object getAdminApi(Principal principal) {
        if(principal == null) {
            return ResUtil.getForbiddenRes();
        }
        return adminService.getAllAdminList();
    }

    @PostMapping("/site/admin/add")
    public Object addAdminApi(Principal principal, @RequestBody Map<String, Object> param) {
        if(principal == null) {
            return ResUtil.getForbiddenRes();
        }

        Map<String, Object> info = (Map<String, Object>) param.get("info");
        Admin admin = new Admin();
        admin.setName((String) info.get("name"));
        admin.setPassword((String) info.get("pwd"));
        admin.setEmail((String) info.get("email"));
        admin.setAvatar((String) info.get("avatar"));

        try {
            Object res = adminService.addAdmin(admin);
            return res;
        } catch (Exception e) {
            log.error(e.getMessage());
            return ResUtil.getErrorRes();
        }
    }

    @PostMapping("/site/admin/update")
    public Object updateAdminApi(Principal principal, @RequestBody Map<String, Object> param) {
        if(principal == null) {
            return ResUtil.getForbiddenRes();
        }

        Map<String, Object> info = (Map<String, Object>) param.get("info");
        Admin admin = new Admin();
        admin.setName((String) info.get("name"));
        admin.setPassword((String) info.get("pwd"));
        admin.setEmail((String) info.get("email"));
        admin.setAvatar((String) info.get("avatar"));

        try {
            Object res = adminService.updateAdmin(admin);
            return res;
        } catch (Exception e) {
            log.error(e.getMessage());
            return ResUtil.getErrorRes();
        }
    }

    @PostMapping("/site/admin/delete")
    public Object deleteAdminApi(Principal principal, String name) {
        if(principal == null) {
            return ResUtil.getForbiddenRes();
        }

        try {
            Object res = adminService.deleteAdmin(name);
            return res;
        } catch (Exception e) {
            log.error(e.getMessage());
            return ResUtil.getErrorRes();
        }
    }

}
