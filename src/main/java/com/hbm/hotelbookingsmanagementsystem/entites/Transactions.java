package com.hbm.hotelbookingsmanagementsystem.entites;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;
import org.springframework.lang.NonNull;

@Entity
public class Transactions implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer transaction_id;
	@Column
	@Min(value = 1)
	@NotNull(message = "Please enter the amount")
	private Double amount;
	
	 @OneToOne(mappedBy = "transactions", fetch = FetchType.EAGER, optional = false)
	@NotFound(action = NotFoundAction.IGNORE)
	 @JoinColumn(name = "pid")
	private Payments payment;

	public Transactions() {

	}

	public Transactions(Integer transaction_id, Double amount, Payments payment) {
		this.transaction_id = transaction_id;
		this.amount = amount;
	}

	public Transactions(Double amount,Payments payment) {
		this.amount = amount;
	}

	public int getTransaction_id() {
		return transaction_id;
	}

	public void setTransaction_id(int transaction_id) {
		this.transaction_id = transaction_id;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}
	
}
