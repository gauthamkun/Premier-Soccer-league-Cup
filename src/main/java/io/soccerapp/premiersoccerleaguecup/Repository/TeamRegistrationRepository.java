package io.soccerapp.premiersoccerleaguecup.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.soccerapp.premiersoccerleaguecup.Java.TeamRegistration;

@Repository
public interface TeamRegistrationRepository extends JpaRepository<TeamRegistration, String>{
	

}