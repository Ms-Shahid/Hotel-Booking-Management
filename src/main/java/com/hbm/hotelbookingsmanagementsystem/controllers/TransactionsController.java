package com.hbm.hotelbookingsmanagementsystem.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hbm.hotelbookingsmanagementsystem.entites.Transactions;
import com.hbm.hotelbookingsmanagementsystem.services.ITransactionsService;

@RestController
@RequestMapping(value = "/room_Details")
@CrossOrigin(value="*")
public class TransactionsController {

	@Autowired
	private ITransactionsService transactionsService;

	@PostMapping(value = "/add")
	public ResponseEntity<Transactions> addTransaction(@Valid @RequestBody Transactions transactions) {
		return new ResponseEntity<Transactions>(transactionsService.addTransaction(transactions), HttpStatus.CREATED);
	}

}
