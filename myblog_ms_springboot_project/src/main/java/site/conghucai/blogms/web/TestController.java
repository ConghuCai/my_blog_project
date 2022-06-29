package site.conghucai.blogms.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @RequestMapping("/test/root")
    public Object rootTest() {
        return "hello root";
    }

    @RequestMapping("/test/admin")
    public Object adminTest() {
        return "hello admin";
    }

}
