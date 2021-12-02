package io.soccerapp.premiersoccerleaguecup.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.soccerapp.premiersoccerleaguecup.model.*;

@Repository
public interface UsersRepository extends JpaRepository<Users, Integer>{
  Users findByEmail(String email);
	

}
