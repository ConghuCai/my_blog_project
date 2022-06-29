package site.conghucai.blogms.service;

import site.conghucai.blogms.model.Link;

import java.util.Map;

public interface LinkService {

    Map<String, Object> getAllLinkList();

    Map<String, Object> updateLink(Link link);

    Map<String, Object> addLink(Link link);

    Map<String, Object> deleteLink(Integer id);

}
