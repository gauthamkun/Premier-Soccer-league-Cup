package io.soccerapp.premiersoccerleaguecup.Java;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TeamRegistration1")
public class TeamRegistration {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String email;
	
	public String getEmail() {
		return email;
	}

	private String TeamName;
	
	private String Division;

	private String AgeGroup;
	
	public TeamRegistration() {
		
	}


	
	@Override
	public String toString() {
		return "TeamRegistration [id=" + id + ", email=" + email + ", TeamName=" + TeamName + ", Division=" + Division + " , AgeGroup=" + AgeGroup + "]";
	}



	public TeamRegistration(String email, String TeamName, String Division,String AgeGroup) {
		super();
		this.email = email;
		this.TeamName = TeamName;
		this.Division = Division;
		this.AgeGroup = AgeGroup;
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

	public String getTeamName() {
		return TeamName;
	}

	public void setTeamName(String TeamName) {
		this.TeamName = TeamName;
	}

	public String getDivisionRole() {
		return Division;
	}
	public void setDivision(String Division) {
		this.Division= Division;
	}

	public void setAgeGroup(String AgeGroup) {
		this.AgeGroup= AgeGroup;
	}
	public String getAgeGroup() {
		return AgeGroup;
	}

}
