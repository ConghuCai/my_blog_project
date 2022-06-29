package site.conghucai.blogms.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import site.conghucai.blogms.service.HomeService;

import javax.annotation.Resource;

@RestController
public class HomeController {
    @Resource
    private HomeService homeService;

    @GetMapping("/home/pie")
    public Object getPieData(){
        return homeService.getPieData();
    }

    @GetMapping("/home/stat")
    public Object getStatDataApi() {
        return homeService.getCountData();
    }

    @GetMapping("/home/line")
    public Object getLineDataApi() {
        return homeService.getLineData();
    }

    @GetMapping("/home/bar")
    public Object getBarDataApi() {
        return homeService.getBarData();
    }

    @GetMapping("/home/article")
    public Object getArticleTableDataApi() {
        return homeService.getPopArticleList();
    }

    @GetMapping("/home/tag")
    public Object getTagTableDataApi() {
        return homeService.getPopTagList();
    }

    @GetMapping("/home/kind")
    public Object getKindTableDataApi() {
        return homeService.getPopCategoryList();
    }

    @GetMapping("/home/user")
    public Object getUserTableDataApi() {
        return homeService.getImportantUserList();
    }

}
