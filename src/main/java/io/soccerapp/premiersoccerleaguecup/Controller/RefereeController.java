package io.soccerapp.premiersoccerleaguecup.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RestController;

import io.soccerapp.premiersoccerleaguecup.Java.RefereeRegistration;
import io.soccerapp.premiersoccerleaguecup.Repository.RefereeRepository;
@RestController
public class RefereeController {
    
	@Autowired
	public RefereeRepository refereeRepository;

	@CrossOrigin(origins = "*")
    @GetMapping("/getrefereeid/{Id}")
    public List<RefereeRegistration> findUserById(@PathVariable(value = "Id") int Id) {
       return RefereeRepository.findRefereeById(Id);
    }
     
    
}



    
    
    
