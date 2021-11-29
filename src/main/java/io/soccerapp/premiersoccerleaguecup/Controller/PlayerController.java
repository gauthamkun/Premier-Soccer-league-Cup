package io.soccerapp.premiersoccerleaguecup.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RestController;

import io.soccerapp.premiersoccerleaguecup.Java.Player;
import io.soccerapp.premiersoccerleaguecup.Repository.PlayerRepository;


@RestController
public class PlayerController {
	
	@Autowired
	public PlayerRepository playerRepository;

	@CrossOrigin(origins = "*")
    @GetMapping("/getplayerbyteamid/{id}")
    public List<Player> findUserById(@PathVariable(value = "id") int id) {
       return playerRepository.findByteamid(id);
    }
    
    
    
}

