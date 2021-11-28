package io.soccerapp.premiersoccerleaguecup.controller;

import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.soccerapp.premiersoccerleaguecup.model.Scheduling;
import io.soccerapp.premiersoccerleaguecup.repository.ScheduleRepository;

@RestController
@RequestMapping("/v1")
public class ScheduleController {
    @Autowired
    private ScheduleRepository scheduleRepository;

    @CrossOrigin(origins = "*")
    @PostMapping("/Scheduling")
    public String saveUser(@RequestBody Scheduling data) {
        Iterable<Scheduling> scheduledata = scheduleRepository.findAll();
        Iterator<Scheduling> it = scheduledata.iterator();
        while (it.hasNext()) {
            Scheduling schedule = it.next();
            if (schedule.getground().equals(data.getground()))
                return "The Selected ground is already filled. Please choose a different ground";
        }
        this.scheduleRepository.save(data);
        return "Scheduled match" + data.toString();

    }

}
