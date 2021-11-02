package com.hbm.hotelbookingsmanagementsystem.services;

import java.util.List;

import com.hbm.hotelbookingsmanagementsystem.entites.Hotel;

public interface IHotelService {

	public Hotel addHotel(Hotel hotel);

	public Hotel showHotel(Integer hotel_id);

	public Hotel updateHotel(Hotel hotel, Integer hotel_id);

	public void deleteHotel(Integer hotel_id);

	public List<Hotel> showAllHotel();
}
