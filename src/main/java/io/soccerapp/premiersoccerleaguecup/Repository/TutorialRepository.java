package io.soccerapp.premiersoccerleaguecup.Repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import io.soccerapp.premiersoccerleaguecup.model.Tutorial;


public interface TutorialRepository extends JpaRepository<Tutorial, Long> {
	List<Tutorial> findByPublished(boolean published);
	List<Tutorial> findByTitleContaining(String title);
}