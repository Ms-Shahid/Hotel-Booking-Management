package com.hbm.hotelbookingsmanagementsystem.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import com.hbm.hotelbookingsmanagementsystem.entites.Admin;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface IAdminRepository extends JpaRepository<Admin, Integer>{

    @Query("select a from Admin a where a.name = ?1 and a.password = ?2")
    public Optional<Admin> findByAdminnameAndPassword(String name, String password);

}
