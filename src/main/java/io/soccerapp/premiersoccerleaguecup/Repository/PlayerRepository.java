package io.soccerapp.premiersoccerleaguecup.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.soccerapp.premiersoccerleaguecup.Java.Player;

@Repository
public interface PlayerRepository  extends JpaRepository<Player, Integer>{
	
	List<Player> findByteamid(int id);
	List<Player> findByfirstname(String fname);
	List<Player> findBylastname(String lname);
	
}
