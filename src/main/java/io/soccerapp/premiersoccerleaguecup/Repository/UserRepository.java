package io.soccerapp.premiersoccerleaguecup.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.soccerapp.premiersoccerleaguecup.Java.Login;

@Repository
public interface UserRepository extends JpaRepository<Login, String>{
	

}

