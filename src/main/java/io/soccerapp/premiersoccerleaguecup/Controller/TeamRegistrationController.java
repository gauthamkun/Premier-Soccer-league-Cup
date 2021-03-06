package io.soccerapp.premiersoccerleaguecup.Controller;

import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import io.soccerapp.premiersoccerleaguecup.Java.TeamRegistration;
import io.soccerapp.premiersoccerleaguecup.Repository.TeamRegistrationRepository;

@RestController
@RequestMapping("/v1")
public class TeamRegistrationController {

	@Autowired
	private TeamRegistrationRepository userRepository;

	@CrossOrigin(origins = "*")
	@PostMapping("/TeamRegistration")
	public String saveUser(@RequestBody TeamRegistration data) {
		Iterable<TeamRegistration> userlist = userRepository.findAll();
		Iterator<TeamRegistration> it = userlist.iterator();
		while (it.hasNext()) {
			TeamRegistration logindetail = it.next();
			if (logindetail.getEmail() != null && logindetail.getEmail().equals(data.getEmail()))
				return "No";
		}
		this.userRepository.save(data);
		return "Yes";
	}

	
}
