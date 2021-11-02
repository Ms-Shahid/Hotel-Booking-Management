package com.hbm.hotelbookingsmanagementsystem.services;

import java.util.List;

import com.hbm.hotelbookingsmanagementsystem.entites.User;

public interface IUserService {

	 User addUser(User user);
	 User updateUser( Integer user_id, User user);
	 User removeUser(Integer user_id);
	 List<User> showAllUsers();
	 User showUser(Integer user_id);
	 boolean login(String user_name, String password);
}
