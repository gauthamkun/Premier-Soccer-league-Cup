package com.asu.soccer.tournament.SoccerTournament.common.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.asu.soccer.tournament.SoccerTournament.common.entity.UserEntity;

@Transactional
@Repository
@EnableJpaRepositories
public interface UserRepository extends PagingAndSortingRepository<UserEntity,Long>{
//	UserEntity findById(String id);
	UserEntity save(UserEntity user);

	@PersistenceContext
//	EntityManager entityManager;
//	this.entityManager.persist(user_details);
//	    entityManager.createNativeQuery("INSERT INTO user_details (id, first_name, last_name) VALUES (?,?,?)")
//	      .setParameter(1, user_details.getId())
//	      .setParameter(2, user_details.getFirstName())
//	      .setParameter(3, user_details.getLastName())
//	      .executeUpdate();
	
    @Query(value = "SELECT * FROM user_details u WHERE u.email = ?1 and u.password = ?2", nativeQuery = true)
    UserEntity getUser(String username, String password);
	
}
