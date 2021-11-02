package com.hbm.hotelbookingsmanagementsystem.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hbm.hotelbookingsmanagementsystem.entites.User;

@Repository
public interface IUserRepository extends JpaRepository<User, Integer>{
	
	@Query("select u from User u where u.user_name = ?1 and u.password = ?2")
	public Optional<User> findByUsernameAndPassword(String user_name, String password);
}
