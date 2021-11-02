package com.hbm.hotelbookingsmanagementsystem.services.impl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hbm.hotelbookingsmanagementsystem.entites.Admin;
import com.hbm.hotelbookingsmanagementsystem.exceptions.AdminNotFoundException;
import com.hbm.hotelbookingsmanagementsystem.repositories.IAdminRepository;
import com.hbm.hotelbookingsmanagementsystem.services.IAdminService;

@Service
public class AdminServiceImpl implements IAdminService {

	@Autowired
	private IAdminRepository adminRepo;

	@Override
	public Admin saveAdmin(Admin admin) {
		return adminRepo.save(admin);
	}

	@Override
	public List<Admin> getAllAdmins() {
		return adminRepo.findAll();
	}

	@Override
	public Admin getAdmin(Integer id) {
		return adminRepo.findById(id)
				.orElseThrow(() -> new AdminNotFoundException("Admin with Id " + id + " not found"));
	}

	@Override
	public void deleteAdmin(Integer id) {
		Admin admin = getAdmin(id);
		adminRepo.deleteById(admin.getId());
	}

	@Override
	public Admin updateAdmin(Integer id, Admin admin) {
		Optional<Admin> existingAdmin = adminRepo.findById(id);
		if (existingAdmin.isPresent()) {
			Admin admin1 = existingAdmin.get();
			admin1.setName(admin.getName());
			admin1.setPassword(admin.getPassword());
			return adminRepo.save(admin1);
		} else {
			return adminRepo.save(admin);
		}
	}

	@Override
	public boolean signin(String name, String password) {
		Optional<Admin> opt = adminRepo.findByAdminnameAndPassword(name,password);
		if(opt.isPresent())
		{
			return true;
		}
		return false;
	}
}
