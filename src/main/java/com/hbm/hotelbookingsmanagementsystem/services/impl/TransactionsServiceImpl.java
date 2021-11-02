package com.hbm.hotelbookingsmanagementsystem.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hbm.hotelbookingsmanagementsystem.entites.Transactions;
import com.hbm.hotelbookingsmanagementsystem.repositories.ITransactionsRepository;
import com.hbm.hotelbookingsmanagementsystem.services.ITransactionsService;

@Service
public class TransactionsServiceImpl implements ITransactionsService {

	@Autowired
	private ITransactionsRepository transactionsrepository;

	@Override
	public Transactions addTransaction(Transactions transaction) {
		return transactionsrepository.save(transaction);
	}
}
