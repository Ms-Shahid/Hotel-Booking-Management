package com.hbm.hotelbookingsmanagementsystem.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hbm.hotelbookingsmanagementsystem.entites.BookingDetails;
import com.hbm.hotelbookingsmanagementsystem.exceptions.BookingDetailsNotFoundException;
import com.hbm.hotelbookingsmanagementsystem.repositories.IBookingDetailsRepository;
import com.hbm.hotelbookingsmanagementsystem.services.IBookingDetailsService;

@Service
public class BookingDetailsServiceImpl implements IBookingDetailsService {

	@Autowired
	IBookingDetailsRepository bookingDetailsRepo;

	@Override
	public BookingDetails addBookingDetails(BookingDetails bookingDetails) {
		BookingDetails saveDetails = bookingDetailsRepo.save(bookingDetails);
		return saveDetails;

	}

	@Override
	public BookingDetails updateBookingDetails(Integer booking_id, BookingDetails bookingDetails) {
		Optional<BookingDetails> opt = bookingDetailsRepo.findById(booking_id);
		if (opt.isPresent()) {
			BookingDetails book1 = opt.get();
			book1.setHotel_id(bookingDetails.getHotel_id());
			book1.setRoom_id(bookingDetails.getRoom_id());
			book1.setUser_id(bookingDetails.getUser_id());
			book1.setBooked_from(bookingDetails.getBooked_from());
			book1.setBooked_to(bookingDetails.getBooked_to());
			book1.setNo_of_adults(bookingDetails.getNo_of_adults());
			book1.setNo_of_children(bookingDetails.getNo_of_children());
			book1.setAmount(bookingDetails.getAmount());
			return bookingDetailsRepo.save(book1);
		} else {
			return bookingDetailsRepo.save(bookingDetails);
		}
	}

	@Override
	public void removeBookingDetails(Integer booking_id) {
		BookingDetails booking = showBookingDetails(booking_id);
		bookingDetailsRepo.deleteById(booking.getBooking_id());
	}

	@Override
	public List<BookingDetails> showAllBookingDetails() {
		List<BookingDetails> display = bookingDetailsRepo.findAll();
		return display;
	}

	@Override
	public BookingDetails showBookingDetails(Integer booking_id) {
		return bookingDetailsRepo.findById(booking_id).orElseThrow(() -> new BookingDetailsNotFoundException(
				"Booking Details with given Id: " + booking_id + " Not Available"));
	}
}
