package com.hbm.hotelbookingsmanagementsystem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hbm.hotelbookingsmanagementsystem.entites.BookingDetails;

public interface IBookingDetailsRepository extends JpaRepository<BookingDetails, Integer>{

}
