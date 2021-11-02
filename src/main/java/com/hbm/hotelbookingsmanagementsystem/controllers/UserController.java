package com.hbm.hotelbookingsmanagementsystem.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.hbm.hotelbookingsmanagementsystem.entites.Login;
import com.hbm.hotelbookingsmanagementsystem.entites.User;
import com.hbm.hotelbookingsmanagementsystem.services.IUserService;

@RestController
@RequestMapping(value = "/user")
@CrossOrigin(origins = "*")
public class UserController {

	@Autowired
	private IUserService userService;
	
	@PostMapping(value="/login")
	public ResponseEntity<Map<String,String>> login(@RequestBody Login login){
		Boolean isLoginSucess = userService.login(login.getUser_name(),login.getPassword());
		
		Map m = new HashMap();
		String msg = "";
		if (isLoginSucess)
		{
			msg ="Welcome," +login.getUser_name();
			m.put("msg", msg);
			return new ResponseEntity<Map<String,String>>(m,HttpStatus.OK);
		} 
		
		else 
		{
			msg ="Invalid Username and Password";
			m.put("msg", msg);
			return new ResponseEntity<Map<String,String>>(m,HttpStatus.OK);
		}
	}

	@PostMapping(value = "/save")
	public ResponseEntity<User> saveUser(@Valid @RequestBody User user) {
		return new ResponseEntity<User>(userService.addUser(user), HttpStatus.CREATED);
	}

	@PutMapping(value = "/update/{user_id}")
	public ResponseEntity<User> updateUser(@PathVariable Integer user_id, @RequestBody User user) {
		User updatedUser = userService.updateUser(user_id, user);
		return new ResponseEntity<User>(updatedUser, HttpStatus.CREATED);
	}

	@DeleteMapping(value = "/delete/{user_id}")
	public ResponseEntity<String> removeUser(@PathVariable Integer user_id) {
		userService.removeUser(user_id);
		String msg = "User with Id " + user_id + " Deleted Successfully";
		return new ResponseEntity<String>(msg, HttpStatus.OK);
	}

	@GetMapping(value = "/showAllUsers")
	public ResponseEntity<List<User>> showAllUsers() {
		List<User> allUsers = userService.showAllUsers();
		return new ResponseEntity<List<User>>(allUsers, HttpStatus.OK);
	}

	@GetMapping(value = "/showUser/{user_id}")
	public ResponseEntity<User> getUser(@PathVariable Integer user_id) {
		User userById = userService.showUser(user_id);
		return new ResponseEntity<User>(userById, HttpStatus.OK);
	}

}
