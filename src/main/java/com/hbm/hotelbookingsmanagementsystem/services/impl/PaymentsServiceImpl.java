package com.hbm.hotelbookingsmanagementsystem.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hbm.hotelbookingsmanagementsystem.entites.Payments;
import com.hbm.hotelbookingsmanagementsystem.repositories.IPaymentsRepository;
import com.hbm.hotelbookingsmanagementsystem.services.IPaymentsService;

@Service
public class PaymentsServiceImpl implements IPaymentsService {

	@Autowired
	IPaymentsRepository paymentRepository;

	@Override
	public Payments addPayment(Payments payment) {
		Payments pay = paymentRepository.save(payment);
		return pay;
	}
}
