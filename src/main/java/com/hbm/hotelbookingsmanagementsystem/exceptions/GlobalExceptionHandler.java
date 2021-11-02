package com.hbm.hotelbookingsmanagementsystem.exceptions;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.hbm.hotelbookingsmanagementsystem.exceptions.customexceptions.AdminError;
import com.hbm.hotelbookingsmanagementsystem.exceptions.customexceptions.HotelError;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		List<String> errors = ex.getBindingResult().getFieldErrors().stream().map((error -> error.getDefaultMessage()))
				.collect(Collectors.toList());
		return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(AdminNotFoundException.class)
	public ResponseEntity<?> handleAdminNotFoundException(AdminNotFoundException exception, WebRequest request) {
		AdminError error = new AdminError(new Date(), exception.getMessage(), request.getDescription(false));
		return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(UserNotFoundException.class)
	public ResponseEntity<?> handleUserNotFoundException(UserNotFoundException exception, WebRequest request) {
		AdminError error = new AdminError(new Date(), exception.getMessage(), request.getDescription(false));
		return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(BookingDetailsNotFoundException.class)
	public ResponseEntity<?> handleBookingNotFoundException(BookingDetailsNotFoundException exception,
			WebRequest request) {
		AdminError error = new AdminError(new Date(), exception.getMessage(), request.getDescription(false));
		return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(RoomDetailsNotFoundException.class)
	public ResponseEntity<?> handleRoomNotFoundException(RoomDetailsNotFoundException exception, WebRequest request) {
		AdminError error = new AdminError(new Date(), exception.getMessage(), request.getDescription(false));
		return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(PaymentNotFoundException.class)
	public ResponseEntity<?> PaymentNotFoundException(PaymentNotFoundException exception, WebRequest request) {
		AdminError error = new AdminError(new Date(), exception.getMessage(), request.getDescription(false));
		return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(HotelNotFoundException.class)
	public ResponseEntity<?> handleHotelNotFoundException(HotelNotFoundException exception, WebRequest request) {
		HotelError HotelerrorHandler = new HotelError(new Date(), exception.getMessage(),
				request.getDescription(false));
		return new ResponseEntity<>(HotelerrorHandler, HttpStatus.NOT_FOUND);
	}

}
