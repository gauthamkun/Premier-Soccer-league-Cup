package com.asu.soccer.tournament.SoccerTournament.common.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user_details")
public class UserEntity {
	
	@Id
	@GeneratedValue
	private long id;
	
	@Column(nullable=false)
    private String role;
    
	@Column(nullable=true)
    private String reg_date;
	
	@Column(nullable=false)
    private String email;
	
	@Column(nullable=false)
    private String password;
	
	@Column(nullable=false)
    private String gender;
	
	@Column(nullable=false)
    private String first_name;

	@Column(nullable=false)
    private String last_name;
	
	@Column(nullable=false)
    private String withdraw_flag;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getReg_date() {
		return reg_date;
	}

	public void setReg_date(String reg_date) {
		this.reg_date = reg_date;
	}

	public String getEmail() {
		return email;
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

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getWithdraw_flag() {
		return withdraw_flag;
	}

	public void setWithdraw_flag(String withdraw_flag) {
		this.withdraw_flag = withdraw_flag;
	}
	
	
	
}
	
