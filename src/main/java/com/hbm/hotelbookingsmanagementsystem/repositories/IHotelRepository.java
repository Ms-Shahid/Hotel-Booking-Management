package com.hbm.hotelbookingsmanagementsystem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hbm.hotelbookingsmanagementsystem.entites.Hotel;

public interface IHotelRepository extends JpaRepository<Hotel,Integer>{

}
