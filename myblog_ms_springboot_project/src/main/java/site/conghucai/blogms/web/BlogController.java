package site.conghucai.blogms.web;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import site.conghucai.blogms.model.Category;
import site.conghucai.blogms.service.*;
import site.conghucai.blogms.utils.ResUtil;

import javax.annotation.Resource;
import java.security.Principal;
import java.util.Map;

@Slf4j
@RestController
public class BlogController {
    @Resource
    private CategoryService categoryService;
    @Resource
    private TagService tagService;
    @Resource
    private GiteeUserService giteeUserService;
    @Resource
    private CommentService commentService;
    @Resource
    private MessageService messageService;

    @GetMapping("/blog/kind/get")
    public Object getKindListApi(Principal principal) {
        if(principal == null) {
            return ResUtil.getForbiddenRes();
        }
        return categoryService.getCategoryList();
    }

    @GetMapping("/blog/tag/get")
    public Object getTagListApi(Principal principal) {
        if(principal == null) {
            return ResUtil.getForbiddenRes();
        }
        return tagService.getTagList();
    }

    @PostMapping("/blog/tag/update")
    public Object updateTagApi(Principal principal, String tag, String name) {
        if(principal == null) {
            return ResUtil.getForbiddenRes();
        }

        try {
            Object res = tagService.updateTag(tag, name);
            return res;
        } catch (Exception e) {
            log.error(e.getMessage());
            return ResUtil.getErrorRes();
        }
    }

    @PostMapping("/blog/tag/delete")
    public Object deleteTagApi(Principal principal, String tag) {
        if(principal == null) {
            return ResUtil.getForbiddenRes();
        }

        try {
            Object res = tagService.deleteTag(tag);
            return res;
        } catch (Exception e) {
            log.error(e.getMessage());
            return ResUtil.getErrorRes();
        }
    }

    @GetMapping("/blog/kind-menu/get")
    public Object getMenuKindListApi(Principal principal) {
        if(principal == null) {
            return ResUtil.getForbiddenRes();
        }
        return categoryService.getMenuCategoryList();

    }

    @PostMapping("/blog/kind/add")
    public Object addKindApi(Principal principal, @RequestBody Map<String, Object> param) {
        if(principal == null) {
            return ResUtil.getForbiddenRes();
        }

        Map<String, Object> info = (Map<String, Object>) param.get("info");
        Category category = new Category();
        category.setName((String) info.get("name"));
        category.setLabel((String) info.get("label"));
        category.setAvatar((String) info.get("avatar"));
        category.setIntro((String) info.get("intro"));
        category.setSort(Integer.parseInt(info.get("sort").toString()));
        category.setMenu(Integer.parseInt(info.get("menu").toString()));

        try {
            Object res = categoryService.addCategory(category);
            return res;
        } catch (Exception e) {
            log.error(e.getMessage());
            return ResUtil.getErrorRes();
        }
    }

    @PostMapping("/blog/kind/update")
    public Object updateKindApi(Principal principal, @RequestBody Map<String, Object> param) {
        if(principal == null) {
            return ResUtil.getForbiddenRes();
        }

        Map<String, Object> info = (Map<String, Object>) param.get("info");
        Category category = new Category();
        category.setName((String) info.get("name"));
        category.setLabel((String) info.get("label"));
        category.setAvatar((String) info.get("avatar"));
        category.setIntro((String) info.get("intro"));
        category.setSort(Integer.parseInt(info.get("sort").toString()));
        category.setMenu(Integer.parseInt(info.get("menu").toString()));

        try {
            Object res = categoryService.updateCategory(category);
            return res;
        } catch (Exception e) {
            log.error(e.getMessage());
            return ResUtil.getErrorRes();
        }
    }

    @PostMapping("/blog/kind/delete")
    public Object deleteKindApi(Principal principal, String name) {
        if(principal == null) {
            return ResUtil.getForbiddenRes();
        }

        try {
            Object res = categoryService.deleteCategory(name);
            return res;
        } catch (Exception e) {
            log.error(e.getMessage());
            return ResUtil.getErrorRes();
        }
    }

    @GetMapping("/blog/user/list")
    public Object getUserApi(Principal principal) {
        if(principal == null) {
            return ResUtil.getForbiddenRes();
        }
        return giteeUserService.getAllUserList();
    }

    @PostMapping("/blog/user/delete")
    public Object deleteUserApi(Principal principal, String login) {
        if(principal == null) {
            return ResUtil.getForbiddenRes();
        }

        try {
            Object res = giteeUserService.deleteUser(login);
            return res;
        } catch (Exception e) {
            log.error(e.getMessage());
            return ResUtil.getErrorRes();
        }
    }


    @GetMapping("/blog/comment/list")
    public Object getCommentApi(Principal principal) {
        if(principal == null) {
            return ResUtil.getForbiddenRes();
        }
        return commentService.getAllCommentList();
    }

    @PostMapping("/blog/comment/delete")
    public Object deleteCommentApi(Principal principal, String id) {
        if(principal == null) {
            return ResUtil.getForbiddenRes();
        }

        try {
            Object res = commentService.deleteComment(id);
            return res;
        } catch (Exception e) {
            log.error(e.getMessage());
            return ResUtil.getErrorRes();
        }
    }

    @GetMapping("/blog/message/list")
    public Object getMsgApi(Principal principal) {
        if(principal == null) {
            return ResUtil.getForbiddenRes();
        }
        return messageService.getAllMessage();
    }

    @PostMapping("/blog/message/delete")
    public Object deleteMsgApi(Principal principal, String id) {
        if(principal == null) {
            return ResUtil.getForbiddenRes();
        }

        try {
            Object res = messageService.deleteMessage(id);
            return res;
        } catch (Exception e) {
            log.error(e.getMessage());
            return ResUtil.getErrorRes();
        }
    }

}
