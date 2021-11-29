package io.soccerapp.premiersoccerleaguecup.Java;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Player")
public class Player {
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int playerid;
	
	@Column(name = "firstname")
	String firstname;
	
	@Column(name = "lastname")
	String lastname;
	
	@Column(name = "emailId")
	String emailId;
	
	@Column(name = "age")
	int age;
	
	@Column(name = "gender")
	String gender;
	
	@Column(name = "teamid")
	int teamid;
	
	public int getPlayerid() {
		return playerid;
	}
	public void setPlayerid(int playerid) {
		this.playerid = playerid;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public int getTeamid() {
		return teamid;
	}
	public void setTeamid(int teamid) {
		this.teamid = teamid;
	}
	@Override
	public String toString() {
		return "Player [playerid=" + playerid + ", firstname=" + firstname + ", lastname=" + lastname + ", emailId="
				+ emailId + ", age=" + age + ", gender=" + gender + ", teamid=" + teamid + "]";
	}
	public Player() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Player(int playerid, String firstname, String lastname, String emailId, int age, String gender, int teamid) {
		super();
		this.playerid = playerid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.emailId = emailId;
		this.age = age;
		this.gender = gender;
		this.teamid = teamid;
	}
	
	
	

}
