package io.soccerapp.premiersoccerleaguecup.Java;

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
	private int Id;
	
	private long RefereeId;
	private String name;
	
	public RefereeRegistration() {
		
	}
	@Override
	public String toString() {
		return "RefereeRegistration [id=" + Id + ", RefereeId=" + RefereeId + ", name=" + name + "]";
	}
	
    public RefereeRegistration(String name, int Id, long RefereeId) {
		super();
		this.name = name;
		this.Id = Id;
		this.RefereeId = RefereeId;
	}
	public void setId(int Id) {
		this.Id = Id;
	}
	public long getId() {
		return Id;
	}

	public void setName(String name) {
		this.name = name;
	}
	public String getName() {
		return name;
	}

	public void setRefereeId(long RefereeId) {
		this.RefereeId = RefereeId;
	}
	public long getRefereeId() {
		return RefereeId;
	}

}
