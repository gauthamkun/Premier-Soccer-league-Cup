package io.soccerapp.premiersoccerleaguecup.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.soccerapp.premiersoccerleaguecup.Java.TeamRegistration;

@Repository
public interface TeamRegistrationRepository extends JpaRepository<TeamRegistration, String>{
	

}