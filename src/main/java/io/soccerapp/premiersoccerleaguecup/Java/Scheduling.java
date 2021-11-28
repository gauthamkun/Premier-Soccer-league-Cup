package io.soccerapp.premiersoccerleaguecup.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Scheduling")
public class Scheduling {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String teamname1;
    private String teamname2;
    private Date date;
    private String ground;

    public Scheduling() {

    }

    @Override
    public String toString() {
        return "Scheduling [ teamname1 = " + teamname1 + " , teamname2 =" + teamname2 + ", date=" + date + ",ground="
                + ground + "]";
    }

    public Scheduling(String teamname1, String teamname2, Date date, String ground) {
        super();
        this.teamname1 = teamname1;
        this.teamname2 = teamname2;
        this.date = date;
        this.ground = ground;
    }

    public String getteamname1() {
        return teamname1;
    }

    public void setteamname1(String teamname1) {
        this.teamname1 = teamname1;
    }

    public String getteamname2() {
        return teamname2;
    }

    public void setteamname2(String teamname2) {
        this.teamname2 = teamname2;
    }

    public Date getdate() {
        return date;
    }

    public void setdate(Date date) {
        this.date = date;
    }

    public String getground() {
        return ground;
    }

    public void setground(String ground) {
        this.ground = ground;
    }
}
