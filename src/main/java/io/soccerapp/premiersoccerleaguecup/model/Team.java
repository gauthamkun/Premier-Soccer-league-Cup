package io.soccerapp.premiersoccerleaguecup.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_team")
public class Team {
@Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 @Column
 private Integer id;

 @Column
 private String name;

 @Column
 private Integer points;


@Override
 public String toString() {
  return "Team [id= " + id + ", name=" + name + ", points=" + points + "]";
 }

public Integer getId() {
  return id;
 }

public void setId(Integer id) {
  this.id = id;
 }

public String getName() {
  return name;
 }

public void setName(String name) {
  this.name = name;
 }

public Integer getPoints() {
  return points;
 }

public void setPoints(Integer points) {
  this.points = points;
 }
}