package io.soccerapp.premiersoccerleaguecup.model;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GroupRepository extends JpaRepository<Team, Long> {
    Team findByName(String name);
}