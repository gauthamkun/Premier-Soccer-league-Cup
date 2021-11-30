package io.soccerapp.premiersoccerleaguecup.Java;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Schedule")
public class Scheduling {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String team1;

    private String team2;

    public String getteam1() {
        return team1;
    }

    private String date;

    private String ground;

    public Scheduling() {

    }

    @Override
    public String toString() {
        return "Scheduling [team1=" + team1 + ", team2=" + team2 + ", date=" + date + ", ground=" + ground
                + "]";
    }

    public Scheduling(String team1, String team2, String date, String ground) {
        super();
        this.team1 = team1;
        this.team2 = team2;
        this.date = date;
        this.ground = ground;
    }

    public String getteam2() {
        return team2;
    }

    public void setteam1(String team1) {
        this.team1 = team1;
    }

    public void setteam2(String team2) {
        this.team2 = team2;
    }

    public String getground() {
        return ground;
    }

    public void setground(String ground) {
        this.ground = ground;
    }

    public String getdate() {
        return date;
    }

    public void setdate(String date) {
        this.date = date;
    }

}
