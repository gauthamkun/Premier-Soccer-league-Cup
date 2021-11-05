package io.soccerapp.premiersoccerleaguecup.Controller;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Referee")
public class RefereeRegistration {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String name;
	
	public RefereeRegistration() {
		
	}
	
    public RefereeRegistration(String name, long id) {
		super();
		this.name = name;
		this.id = id;
	}
	public void setId(long id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

}
