package com.hbm.hotelbookingsmanagementsystem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hbm.hotelbookingsmanagementsystem.entites.Transactions;

@Repository
public interface ITransactionsRepository extends JpaRepository<Transactions, Integer>{

}
