package site.conghucai.blogms.mapper;

import org.apache.ibatis.annotations.Param;
import site.conghucai.blogms.model.Tag;

import java.util.List;
import java.util.Map;

public interface TagMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Tag record);

    int insertSelective(Tag record);

    Tag selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Tag record);

    int updateByPrimaryKey(Tag record);

    List<Map<String, Object>> selectTagArticleStat();

    List<Map<String, Object>> selectTagNameList();

    int insertTagsBatch(List<String> tags);

    int insertArticleTagRefRecordBatch(List<Map<String, String>> refs);

    List<String> selectRefByArticleID(String articleID);

    int deleteRefByArticleID(String articleID);

    int addCountByNames(List<String> names);

    int minusCountByNames(List<String> names);

    int updateTagByName(@Param("oldName") String oldName, @Param("newName") String newName);

    int updateRefByName(@Param("oldName") String oldName, @Param("newName") String newName);

    int deleteTagByName(String name);

    int deleteRefByName(String name);
}