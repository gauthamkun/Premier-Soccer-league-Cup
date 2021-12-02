package io.soccerapp.premiersoccerleaguecup.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.soccerapp.premiersoccerleaguecup.model.*;
import io.soccerapp.premiersoccerleaguecup.repo.*;
import io.soccerapp.premiersoccerleaguecup.utility.*;

@Service
public class LoginServices {
	@Autowired
	UsersRepository userRepository;

	public Users checkLogin(String email, String password) throws Exception {
		try{
			Users users = userRepository.findByEmail(email);
			if(users!=null) {
				String correctPassword = users.getPassword();
				if(correctPassword.equals(password)) {
					return users;
				}
				else {
					throw new SoccerClubException("Password is incorrect","Password is incorrect","Password is incorrect");
				}
			}
			else {
				throw new SoccerClubException("User not registered","User not registered","User not registered");
			}
		}
		catch(SoccerClubException s) {
			throw s;
		}
		catch(Exception e){
			throw new SoccerClubException("Something went wrong","Something went wrong","Something went wrong");
		}


	}
	public void registerUser(UserDTO userDTO) {
		try {
			Users existingUser = userRepository.findByEmail(userDTO.getEmailId());
			if(existingUser==null) {
				Users user = new Users();
				user.setEmail(userDTO.getEmailId());
				user.setPassword(userDTO.getPassword());
				user.setRole(userDTO.getRole());
				userRepository.save(user);
			}
			else {
				throw new SoccerClubException("Email already exists","Email already exists","Email already exists");
			}
		}
		catch(SoccerClubException s) {
			throw s;
		}
		catch(Exception e){
			throw new SoccerClubException("Unable to save","Unable to save","Unable to save");
		}

	}
}
