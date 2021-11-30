package io.soccerapp.premiersoccerleaguecup.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.soccerapp.premiersoccerleaguecup.Java.Scheduling;

@Repository
public interface ScheduleRepository extends JpaRepository<Scheduling, String> {

}