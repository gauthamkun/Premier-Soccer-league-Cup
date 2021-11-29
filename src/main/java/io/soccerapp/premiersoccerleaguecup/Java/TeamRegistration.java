package io.soccerapp.premiersoccerleaguecup.Java;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
<<<<<<< Updated upstream
@Table(name = "TeamRegistration")
=======
@Table(name = "Team3")
>>>>>>> Stashed changes
public class TeamRegistration {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String email;
	
	public String getEmail() {
		return email;
	}

	private String coachname;

	private String clubname;

	private String teamname;
	
	private String division;
	

	
	private String age;

	public TeamRegistration() {
		
	}


	
	@Override
	public String toString() {
		return "TeamRegistration [id=" + id + ", email=" + email + ", Coachname=" + coachname + ", Teamname=" + teamname +", Clubname=" + clubname +", divsion=" + division + "]";
	}



	public TeamRegistration(String email, String coachname, String division, String age,String teamname,String clubname ) {
		super();
		this.email = email;
		this.coachname = coachname;
		this.teamname = teamname;
		this.clubname = clubname;
		this.age = age;
		this.division = division;
		
	}



	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCoachname() {
		return coachname;
	}

	public void setCoachname(String coachname) {
		this.coachname = coachname;
	}
	public String getTeamname() {
		return teamname;
	}

	public void setTeamname(String teamname) {
		this.teamname = teamname;
	}
	public String getClubname() {
		return clubname;
	}

	public void setClubname(String clubname) {
		this.clubname = clubname;
	}

	public String getDivision() {
		return division;
	}

	public void setDivision(String division) {
		this.division = division;
	}
	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}
	
	
	
	
	
}



