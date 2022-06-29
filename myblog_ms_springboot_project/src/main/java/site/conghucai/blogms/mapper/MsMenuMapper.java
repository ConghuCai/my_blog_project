package site.conghucai.blogms.mapper;

import site.conghucai.blogms.model.MsMenu;

import java.util.List;
import java.util.Map;

public interface MsMenuMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(MsMenu record);

    int insertSelective(MsMenu record);

    MsMenu selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(MsMenu record);

    int updateByPrimaryKey(MsMenu record);

    List<MsMenu> selectAllMenuByOrder();

    Map<String, String> selectHomeCountLayout();
}