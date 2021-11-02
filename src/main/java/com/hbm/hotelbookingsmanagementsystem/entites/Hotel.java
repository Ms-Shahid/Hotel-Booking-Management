package com.hbm.hotelbookingsmanagementsystem.entites;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Hotel implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="hid")
	private Integer hotel_id;

	@Column
	@NotEmpty(message = "Hotel City is Required")
	private String city;

	@Column
	@NotEmpty(message = "Hotel Name is Required")
	private String hname;

	@Column
	@NotEmpty(message = "Hotel Address is Required")
	private String adrress;

	@Column
	@NotEmpty(message = "Hotel Discription is Required")
	private String discription;

	@Column
	@Min(value = 1)
	@NotNull(message = "Enter the avg_rate_per_day")
	private Double avg_rate_per_day;

	@Column
	@Email
	@NotEmpty(message = "Hotel Email is Required")
	private String email;

	@Column
	@NotEmpty(message = "Hotel Phone1 Number is Required")
	private String phone1;

	@Column
	@NotEmpty(message = "Hotel Phone2 Number is Required")
	private String phone2;

	@Column
	@NotEmpty(message = "Hotel Website is Required")
	private String website;
	
	@OneToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	@NotFound(action = NotFoundAction.IGNORE)
    private BookingDetails bookingDetails;
	
//	 @OneToMany(fetch = FetchType.LAZY,cascade=CascadeType.ALL,orphanRemoval = true)
//	 @JoinColumn(name="htl_fid")
//	 private List<RoomDetails> roomDetails = new ArrayList<>();
	
	public Integer getHotel_id() {
		return hotel_id;
	}

	public void setHotel_id(Integer hotel_id) {
		this.hotel_id = hotel_id;
	}

	public Hotel() {

	}

	public Hotel(Integer hotel_id, String city, String hname, String adrress, String discription, Double avg_rate_per_day,
			 String email, String phone1, String phone2,
			String website) {
		this.hotel_id = hotel_id;
		this.city = city;
		this.hname = hname;
		this.adrress = adrress;
		this.discription = discription;
		this.avg_rate_per_day = avg_rate_per_day;
		this.email = email;
		this.phone1 = phone1;
		this.phone2 = phone2;
		this.website = website;
		
	}
	
	public Hotel(String city, String hname, String adrress, String discription, Double avg_rate_per_day,
			 String email, String phone1, String phone2,
			String website) {
		
		this.city = city;
		this.hname = hname;
		this.adrress = adrress;
		this.discription = discription;
		this.avg_rate_per_day = avg_rate_per_day;
		this.email = email;
		this.phone1 = phone1;
		this.phone2 = phone2;
		this.website = website;
		
	}

	public Integer getHid() {
		return hotel_id;
	}

	public void setHid(Integer hotel_id) {
		this.hotel_id = hotel_id;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getHname() {
		return hname;
	}

	public void setHname(String hname) {
		this.hname = hname;
	}

	public String getAdrress() {
		return adrress;
	}

	public void setAdrress(String adrress) {
		this.adrress = adrress;
	}

	public String getDiscription() {
		return discription;
	}

	public void setDiscription(String discription) {
		this.discription = discription;
	}

	public Double getAvg_rate_per_day() {
		return avg_rate_per_day;
	}

	public void setAvg_rate_per_day(Double avg_rate_per_day) {
		this.avg_rate_per_day = avg_rate_per_day;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone1() {
		return phone1;
	}

	public void setPhone1(String phone1) {
		this.phone1 = phone1;
	}

	public String getPhone2() {
		return phone2;
	}

	public void setPhone2(String phone2) {
		this.phone2 = phone2;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public BookingDetails getBookingDetails() {
		return bookingDetails;
	}

	public void setBookingDetails(BookingDetails bookingDetails) {
		this.bookingDetails = bookingDetails;
	}

}
