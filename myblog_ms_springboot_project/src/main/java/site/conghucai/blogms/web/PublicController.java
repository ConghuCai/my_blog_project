package site.conghucai.blogms.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import site.conghucai.blogms.service.PublicService;

import javax.annotation.Resource;
import java.security.Principal;

@RestController
public class PublicController {
    @Resource
    private PublicService publicService;

    @GetMapping("/public/page")
    public Object getLoginPage() {
        return publicService.getLoginPage();
    }

    @GetMapping("/public/check")
    public Object checkLogin(Principal principal) {
        String name = "";
        if(principal != null){
            name = principal.getName();
        }
        return publicService.checkLogin(name);
    }

    @GetMapping("/public/menu")
    public Object getMenuData() {
        return publicService.getMenuData();
    }

    @GetMapping("/public/about")
    public Object getAboutApi() {
        return publicService.getAboutInfo();
    }

}
