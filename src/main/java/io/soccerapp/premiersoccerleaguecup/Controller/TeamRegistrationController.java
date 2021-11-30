package io.soccerapp.premiersoccerleaguecup.controller;

import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import io.soccerapp.premiersoccerleaguecup.Java.TeamRegistration;
import io.soccerapp.premiersoccerleaguecup.repository.TeamRegistrationRepository;

@RestController
@RequestMapping("/v1")
public class TeamRegistrationController {

	@Autowired
	private TeamRegistrationRepository userRepository;

	@CrossOrigin(origins = "*")
	@PostMapping("/signup")
	public String saveUser(@RequestBody TeamRegistration data) {
		Iterable<TeamRegistration> userlist = userRepository.findAll();
		Iterator<TeamRegistration> it = userlist.iterator();
		while (it.hasNext()) {
			TeamRegistration logindetail = it.next();
			if (logindetail.getEmail() != null && logindetail.getEmail().equals(data.getEmail()))
				return "User is already already registered! Please try sign in!";
		}
		this.userRepository.save(data);
		return "User registered " + data.toString();
	}

	@CrossOrigin(origins = "*")
	@PostMapping("/login")
	public String getUser(@RequestBody TeamRegistration data) {
		Iterable<TeamRegistration> userlist = userRepository.findAll();

		Iterator<TeamRegistration> it = userlist.iterator();
		while (it.hasNext()) {
			TeamRegistration logindetail = it.next();
			if (logindetail.getEmail() != null && logindetail.getEmail().equals(data.getEmail()))
				return "User logged in";
		}

		return "User not regsitered";

	}

}
