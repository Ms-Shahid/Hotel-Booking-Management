package com.hbm.hotelbookingsmanagementsystem.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hbm.hotelbookingsmanagementsystem.entites.Payments;
import com.hbm.hotelbookingsmanagementsystem.services.IPaymentsService;

@RestController
@RequestMapping(value = "/payment")
@CrossOrigin(origins = "*")
public class PaymentsController {

	@Autowired
	private IPaymentsService paymentService;

	@PostMapping(value = "/payment/save")
	public ResponseEntity<Payments> addPayment(@Valid @RequestBody Payments payment) {
		Payments savePayment = paymentService.addPayment(payment);
		return new ResponseEntity<Payments>(savePayment, HttpStatus.CREATED);
	}
}
