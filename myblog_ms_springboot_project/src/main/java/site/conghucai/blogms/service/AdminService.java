package site.conghucai.blogms.service;

import site.conghucai.blogms.model.Admin;

import java.util.Map;

public interface AdminService {

    Map<String, Object> getAllAdminList();

    Map<String, Object> updateAdmin(Admin admin);

    Map<String, Object> addAdmin(Admin admin);

    Map<String, Object> deleteAdmin(String name);

}
