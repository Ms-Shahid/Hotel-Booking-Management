package com.hbm.hotelbookingsmanagementsystem.services;

import java.util.List;

import com.hbm.hotelbookingsmanagementsystem.entites.RoomDetails;

public interface IRoomDetailsService {

	RoomDetails addRoomDetails(RoomDetails roomDetails);

	RoomDetails updateRoomDetails(RoomDetails roomDetails, Integer room_id);

	void removeRoomDetails(Integer room_id);

	List<RoomDetails> showAllRoomDetails();

	RoomDetails showRoomDetails(Integer room_id);
}
