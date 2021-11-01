package io.soccerapp.premiersoccerleaguecup;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import io.soccerapp.premiersoccerleaguecup.model.Division;
import io.soccerapp.premiersoccerleaguecup.model.Team;
import io.soccerapp.premiersoccerleaguecup.model.TeamRepository;

import java.time.Instant;
import java.util.Collections;
import java.util.stream.Stream;

@Component
class TeamInitializer implements CommandLineRunner {

    private final TeamRepository repository;

    public TeamInitializer(TeamRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) {
        Stream.of("ASU", "MSU", "CalState",
                "UC Berkley").forEach(name ->
                repository.save(new Team(name))
        );

        Team asu = repository.findByName("ASU");
        Division e = Division.builder().title("Arizona State University")
                .description("Soccer Football Team")
                .date(Instant.parse("2021-10-31T17:00:00.000Z"))
                .build();
        asu.setEvents(Collections.singleton(e));
        repository.save(asu);

        repository.findAll().forEach(System.out::println);
    }
}