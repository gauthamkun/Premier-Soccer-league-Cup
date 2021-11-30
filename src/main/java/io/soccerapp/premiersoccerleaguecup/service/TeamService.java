package io.soccerapp.premiersoccerleaguecup.service;

import java.util.List;

import io.soccerapp.premiersoccerleaguecup.model.Team;


public interface TeamService {

	List<Team> get();
	
	Team get(int id);
	
	void save(Team team);
	
	void delete(int id);
	
}