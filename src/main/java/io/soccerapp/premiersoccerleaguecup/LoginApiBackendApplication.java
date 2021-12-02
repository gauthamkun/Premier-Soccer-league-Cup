package io.soccerapp.premiersoccerleaguecup;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableAutoConfiguration
@EnableJpaRepositories("com.example.loginAPIBackend.repo")
@SpringBootApplication (exclude = HibernateJpaAutoConfiguration.class)
public class LoginApiBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(LoginApiBackendApplication.class, args);
	}

}
