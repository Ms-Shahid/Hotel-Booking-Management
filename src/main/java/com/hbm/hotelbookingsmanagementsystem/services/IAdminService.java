package com.hbm.hotelbookingsmanagementsystem.services;

import java.util.List;

import com.hbm.hotelbookingsmanagementsystem.entites.Admin;

public interface IAdminService {

	Admin saveAdmin(Admin admin);

	List<Admin> getAllAdmins();

	Admin getAdmin(Integer id);

	void deleteAdmin(Integer id);

	Admin updateAdmin(Integer id, Admin admin);

	boolean signin(String name, String password);
}
