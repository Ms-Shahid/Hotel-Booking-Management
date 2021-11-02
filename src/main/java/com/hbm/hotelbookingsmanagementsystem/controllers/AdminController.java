package com.hbm.hotelbookingsmanagementsystem.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.validation.Valid;

import com.hbm.hotelbookingsmanagementsystem.entites.Signin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hbm.hotelbookingsmanagementsystem.entites.Admin;
import com.hbm.hotelbookingsmanagementsystem.services.IAdminService;

@RestController
@RequestMapping(value = "/admin")
@CrossOrigin(origins = "*")
public class AdminController {
	@Autowired
	private IAdminService adminService;
	@PostMapping("/sigin")
	public ResponseEntity<Map<String,String>> signin(@RequestBody Signin signin){
		Boolean isSiginSucess = adminService.signin(signin.getname(), signin.getPassword());
		Map m = new HashMap();
		String msg = "";
		if(isSiginSucess)
		{
			msg ="Welcome,"+signin.getname();
			m.put("msg", msg);
			return new ResponseEntity<Map<String,String>>(m,HttpStatus.OK);
		}
		else
		{
			msg="Invalid name and password";
			m.put("msg",msg);
			return new ResponseEntity<Map<String,String>>(m,HttpStatus.OK);
		}
	}

	@PostMapping(value = "/add")
	public ResponseEntity<Admin> saveAdmin(@Valid @RequestBody Admin admin) {
		return new ResponseEntity<Admin>(adminService.saveAdmin(admin), HttpStatus.CREATED);
	}

	@GetMapping(value = "/getallAdmins")
	public ResponseEntity<List<Admin>> getAllAdmins() {
		List<Admin> allAdmins = adminService.getAllAdmins();
		return new ResponseEntity<List<Admin>>(allAdmins, HttpStatus.OK);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<Admin> getAdmin(@PathVariable Integer id) {
		Admin adminById = adminService.getAdmin(id);
		return new ResponseEntity<Admin>(adminById, HttpStatus.OK);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<String> deleteAdmin(@PathVariable Integer id) {
		adminService.deleteAdmin(id);
		String msg = "Admin with Id" + id + "Deleted Successfully";
		return new ResponseEntity<String>(msg, HttpStatus.OK);
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<Admin> updateAdmin(@PathVariable Integer id, @RequestBody Admin admin) {
		Admin updatedAdmin = adminService.updateAdmin(id, admin);
		return new ResponseEntity<Admin>(updatedAdmin, HttpStatus.CREATED);
	}

}
