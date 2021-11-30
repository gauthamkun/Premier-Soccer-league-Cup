package io.soccerapp.premiersoccerleaguecup.dao;

import java.util.List;
import io.soccerapp.premiersoccerleaguecup.model.Team;

public interface TeamDAO {
	
	List<Team> get();
	
	Team get(int id);
	
	void save(Team team);
	
	void delete(int id);
	
}