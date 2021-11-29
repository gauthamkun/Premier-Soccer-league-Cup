package io.soccerapp.premiersoccerleaguecup.Repository;
//import java.util.List;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.soccerapp.premiersoccerleaguecup.Java.RefereeRegistration;

@Repository
public interface RefereeRepository extends JpaRepository<RefereeRegistration, String>{

  static List<RefereeRegistration> findRefereeById(int Id) {
    // TODO Auto-generated method stub
    return null;
}  
    
}
