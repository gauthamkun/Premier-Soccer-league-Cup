package io.soccerapp.premiersoccerleaguecup.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.query.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import io.soccerapp.premiersoccerleaguecup.model.Team;


@Repository
public class TeamDAOImp implements TeamDAO {

	@Autowired
	private EntityManager entityManager;

	@Override
	public List<Team> get() {

		Session currSession = entityManager.unwrap(Session.class);
		Query<Team> query = currSession.createQuery("from Team", Team.class);
		List<Team> list = query.getResultList();
		return list;

	}

	@Override
	public Team get(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		Team team = currSession.get(Team.class, id);
		return team;
	}

	@Override
	public void save(Team team) {
		
		Session currSession = entityManager.unwrap(Session.class);
		currSession.saveOrUpdate(team);

	}

	@Override
	public void delete(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		Team team = currSession.get(Team.class, id);
		currSession.delete(team);

	}

}