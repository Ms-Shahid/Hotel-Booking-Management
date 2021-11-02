package com.hbm.hotelbookingsmanagementsystem.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hbm.hotelbookingsmanagementsystem.entites.Hotel;
import com.hbm.hotelbookingsmanagementsystem.exceptions.HotelNotFoundException;
import com.hbm.hotelbookingsmanagementsystem.repositories.IHotelRepository;
import com.hbm.hotelbookingsmanagementsystem.services.IHotelService;

@Service
public class HotelServiceImpl implements IHotelService {
	@Autowired
	private IHotelRepository hotelRepository;

	@Override
	public Hotel addHotel(Hotel hotel) {
		return hotelRepository.save(hotel);
	}

	@Override
	public Hotel updateHotel(Hotel hotel, Integer hotel_id) {

		Optional<Hotel> existingHotel = hotelRepository.findById(hotel_id);
		if (existingHotel.isPresent()) {
			Hotel hotel1 = existingHotel.get();
			hotel1.setCity(hotel.getCity());
			hotel1.setHname(hotel.getHname());
			hotel1.setAdrress(hotel.getAdrress());
			hotel1.setDiscription(hotel.getDiscription());
			hotel1.setAvg_rate_per_day(hotel.getAvg_rate_per_day());
			hotel1.setEmail(hotel.getEmail());
			hotel1.setPhone1(hotel.getPhone1());
			hotel1.setPhone2(hotel.getPhone2());
			hotel1.setWebsite(hotel.getWebsite());
			return hotelRepository.save(hotel1);
		} else {
			return hotelRepository.save(hotel);
		}
	}

	@Override
	public void deleteHotel(Integer hotel_id) {
		Hotel hotel = showHotel(hotel_id);
		hotelRepository.deleteById(hotel.getHid());

	}

	@Override
	public Hotel showHotel(Integer hotel_id) {
		return hotelRepository.findById(hotel_id)
				.orElseThrow(() -> new HotelNotFoundException("Hotel with Id " + hotel_id + " not found"));
	}

	@Override
	public List<Hotel> showAllHotel() {
		return hotelRepository.findAll();
	}

}
