package io.soccerapp.premiersoccerleaguecup.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.soccerapp.premiersoccerleaguecup.service.TeamService;
import io.soccerapp.premiersoccerleaguecup.model.Team;

@RestController
@RequestMapping("/v1")
public class TeamController {
	
	@Autowired
	private TeamService teamService;
	
	@GetMapping("/stats")
	public List<Team> get() {
		return teamService.get();
	}
	
	@PostMapping("/team")
	public Team save(@RequestBody Team team) {
		teamService.save(team);
		return team;
	}
	
	@GetMapping("/team/{id}")
	public Team get(@PathVariable int id) {
		return teamService.get(id);
	}
	
	@DeleteMapping("/team/{id}")
	public String delete(@PathVariable int id) {
		
		teamService.delete(id);
		
		return "Team removed with id "+id;
		
	}
	
	@PutMapping("/team")
	public Team update(@RequestBody Team team) {
		teamService.save(team);
		return team;
	}

}