package com.hbm.hotelbookingsmanagementsystem.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hbm.hotelbookingsmanagementsystem.entites.RoomDetails;
import com.hbm.hotelbookingsmanagementsystem.services.IRoomDetailsService;

@RestController
@RequestMapping(value = "/room_Details")
@CrossOrigin(origins = "*")
public class RoomDetailsController {

	@Autowired
	private IRoomDetailsService room_DetailsService;

	@PostMapping(value = "/room_Details/add")
	public ResponseEntity<RoomDetails> saveRoomDetails(@Valid @RequestBody RoomDetails room_Details) {
		return new ResponseEntity<RoomDetails>(room_DetailsService.addRoomDetails(room_Details), HttpStatus.CREATED);
	}

	@PutMapping(value = "/{room_id}")
	public ResponseEntity<RoomDetails> updateRoomDetails(@PathVariable Integer room_id,
			@RequestBody RoomDetails room_Details) {
		RoomDetails updatedRoomDetails = room_DetailsService.updateRoomDetails(room_Details, room_id);
		return new ResponseEntity<RoomDetails>(updatedRoomDetails, HttpStatus.CREATED);
	}

	@DeleteMapping(value = "/{room_id}")
	public ResponseEntity<String> removeRoomDetails(@PathVariable Integer room_id) {
		room_DetailsService.removeRoomDetails(room_id);
		String msg = "RoomDetails with Id " + room_id + " Deleted Successfully";
		return new ResponseEntity<String>(msg, HttpStatus.OK);
	}

	@GetMapping(value = "/showAllRoomDetails")
	public ResponseEntity<List<RoomDetails>> showAllRoomDetails() {
		List<RoomDetails> allRoomDetails = room_DetailsService.showAllRoomDetails();
		return new ResponseEntity<List<RoomDetails>>(allRoomDetails, HttpStatus.OK);
	}

	@GetMapping(value = "/{room_id}")
	public ResponseEntity<RoomDetails> getRoomDetails(@PathVariable Integer room_id) {
		RoomDetails room_DetailsById = room_DetailsService.showRoomDetails(room_id);
		return new ResponseEntity<RoomDetails>(room_DetailsById, HttpStatus.OK);
	}

}
