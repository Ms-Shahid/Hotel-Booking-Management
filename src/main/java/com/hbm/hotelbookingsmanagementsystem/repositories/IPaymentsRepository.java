package com.hbm.hotelbookingsmanagementsystem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hbm.hotelbookingsmanagementsystem.entites.Payments;

public interface IPaymentsRepository extends JpaRepository<Payments, Integer>{

}
