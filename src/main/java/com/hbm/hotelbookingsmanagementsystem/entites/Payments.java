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
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

@Entity
public class Payments implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="pid")
	private Integer payment_id;
	@Column
	@Min(1)
	@NotNull(message = "Please provide booking id")
	private Integer booking_id;
	@Column
	@Min(1)
	@NotNull(message = "Please provide transaction id")
	private Integer transaction_id;
	
	@OneToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	@NotFound(action = NotFoundAction.IGNORE)
	private Transactions transactions;
	 
//	 @ManyToOne
//	 private BookingDetails bookingDetails;

	public Payments() {

	}

	public Payments(Integer payment_id, Integer booking_id, Integer transaction_id, Transactions transaction) {
			

		this.payment_id = payment_id;
		this.booking_id = booking_id;
		this.transaction_id = transaction_id;
	}

	public Payments(Integer booking_id, Integer transaction_id) {

		this.booking_id = booking_id;
		this.transaction_id = transaction_id;
	}

	public Integer getPayment_id() {
		return payment_id;
	}

	public void setPayment_id(Integer payment_id) {
		this.payment_id = payment_id;
	}

	public Integer getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(Integer booking_id) {
		this.booking_id = booking_id;
	}

	public Integer getTransaction_id() {
		return transaction_id;
	}

	public void setTransaction_id(Integer transaction_id) {
		this.transaction_id = transaction_id;
	}

	public Transactions getTransactions() {
		return transactions;
	}

	public void setTransactions(Transactions transactions) {
		this.transactions = transactions;
	}

//	public BookingDetails getBookingDetails() {
//		return bookingDetails;
//	}
//
//	public void setBookingDetails(BookingDetails bookingDetails) {
//		this.bookingDetails = bookingDetails;
//	}
//    
	
}
