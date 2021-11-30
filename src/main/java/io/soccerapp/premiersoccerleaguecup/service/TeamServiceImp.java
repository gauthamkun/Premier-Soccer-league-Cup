package io.soccerapp.premiersoccerleaguecup.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.soccerapp.premiersoccerleaguecup.dao.*;
import io.soccerapp.premiersoccerleaguecup.model.Team;


@Service
public class TeamServiceImp implements TeamService {
	
	@Autowired
	private TeamDAO teamDao;

	@Transactional
	@Override
	public List<Team> get() {
		return teamDao.get();
	}

	@Transactional
	@Override
	public Team get(int id) {
		return teamDao.get(id);
	}

	@Transactional
	@Override
	public void save(Team employee) {
		teamDao.save(employee);
		
	}

	@Transactional
	@Override
	public void delete(int id) {
		teamDao.delete(id);
		
	}

}