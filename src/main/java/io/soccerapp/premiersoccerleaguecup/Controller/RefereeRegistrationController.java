package io.soccerapp.premiersoccerleaguecup.Controller;
import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.soccerapp.premiersoccerleaguecup.Java.RefereeRegistration;
import io.soccerapp.premiersoccerleaguecup.Repository.RefereeRepository;

@RestController
@RequestMapping("/v1")
public class RefereeRegistrationController {

	@Autowired
	private RefereeRepository refereeRepository;

	@CrossOrigin(origins = "*")
	@PostMapping("/RefereeRegistration")
	public String saveUser(@RequestBody RefereeRegistration data) {
		Iterable<RefereeRegistration> userlist = refereeRepository.findAll();
		Iterator<RefereeRegistration> it = userlist.iterator();
		while (it.hasNext()) {
			RefereeRegistration refereedetail = it.next();
			if (refereedetail.getName() != null && refereedetail.getName().equals(data.getName()))
				return "Referee is already already registered!";
		}
		this.refereeRepository.save(data);
		return "Referee registered " + data.toString();
	}

	

}