package com.hbm.hotelbookingsmanagementsystem.services;

import java.util.List;

import com.hbm.hotelbookingsmanagementsystem.entites.BookingDetails;

public interface IBookingDetailsService {

	BookingDetails addBookingDetails(BookingDetails bookingDetails);
	BookingDetails updateBookingDetails(Integer booking_id, BookingDetails bookingDetails);
	void removeBookingDetails(Integer booking_id);
	List<BookingDetails> showAllBookingDetails();	
	BookingDetails showBookingDetails(Integer booking_id);
}
