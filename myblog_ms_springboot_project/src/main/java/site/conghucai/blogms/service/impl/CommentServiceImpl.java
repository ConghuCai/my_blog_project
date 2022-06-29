package site.conghucai.blogms.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import site.conghucai.blogms.mapper.ArticleMapper;
import site.conghucai.blogms.mapper.CommentMapper;
import site.conghucai.blogms.model.Comment;
import site.conghucai.blogms.service.CommentService;
import site.conghucai.blogms.utils.ResUtil;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Service
public class CommentServiceImpl implements CommentService {

    @Resource
    private CommentMapper commentMapper;
    @Resource
    private ArticleMapper articleMapper;

    @Override
    public Map<String, Object> getAllCommentList() {
        List<Map<String, Object>> data = commentMapper.selectAllCommentList();
        return ResUtil.getReturnRes(data);
    }

    @Override
    @Transactional
    public Map<String, Object> deleteComment(String id) throws RuntimeException {
        Comment comment = commentMapper.selectByPrimaryKey(id);
        String articleID = comment.getArticleId();
        int res = commentMapper.deleteByPrimaryKey(id);
        articleMapper.minusArticleCommentCount(articleID);
        return  res > 0 ? ResUtil.getSuccessRes(): ResUtil.getErrorRes();
    }
}
