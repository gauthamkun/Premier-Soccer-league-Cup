package io.soccerapp.premiersoccerleaguecup.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import io.soccerapp.premiersoccerleaguecup.model.Team;
import io.soccerapp.premiersoccerleaguecup.model.TeamRepository;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/Stats/api")
class TournamentController {

    private final Logger log = LoggerFactory.getLogger(TournamentController.class);
    private TeamRepository teamRepository;

    public TournamentController(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    @GetMapping("/teams")
    Collection<Team> groups() {
        return teamRepository.findAll();
    }

    @GetMapping("/team/{id}")
    ResponseEntity<?> getGroup(@PathVariable Long id) {
        Optional<Team> team = teamRepository.findById(id);
        return team.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/team")
    ResponseEntity<Team> createGroup(@Valid @RequestBody Team team) throws URISyntaxException {
        log.info("Request to create team: {}", team);
        Team result = teamRepository.save(team);
        return ResponseEntity.created(new URI("/api/group/" + result.getId()))
                .body(result);
    }

    @PutMapping("/team/{id}")
    ResponseEntity<Team> updateGroup(@Valid @RequestBody Team team) {
        log.info("Request to update team: {}", team);
        Team result = teamRepository.save(team);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/team/{id}")
    public ResponseEntity<?> deleteGroup(@PathVariable Long id) {
        log.info("Request to delete team: {}", id);
        teamRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}