package io.soccerapp.premiersoccerleaguecup.Java;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TeamRegistration")
public class TeamRegistration {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String email;
	
	public String getEmail() {
		return email;
	}

	private String password;
	
	private String role;
	
	public TeamRegistration() {
		
	}


	
	@Override
	public String toString() {
		return "Login [id=" + id + ", email=" + email + ", password=" + password + ", role=" + role + "]";
	}



	public TeamRegistration(String email, String password, String role) {
		super();
		this.email = email;
		this.password = password;
		this.role = role;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	
	
	
	
	
}
