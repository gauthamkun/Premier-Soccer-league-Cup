package io.soccerapp.premiersoccerleaguecup.Controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.soccerapp.premiersoccerleaguecup.model.*;
import io.soccerapp.premiersoccerleaguecup.service.*;
import io.soccerapp.premiersoccerleaguecup.utility.*;


@RestController
@RequestMapping("/v1")

@CrossOrigin(origins ="*")
public class LoginController {
	@Autowired
	LoginServices loginServices;
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public ResponseEntity<Map<String,Integer>> checkLogin(HttpServletRequest request, HttpServletResponse response, @RequestParam("email") String email, @RequestParam("password") String password ) throws Exception{
		System.out.println("Inside Controller");
		Map<String,Integer> userRoleData = new HashMap<String, Integer>();
		try {
			Users user = loginServices.checkLogin(email, password);
			userRoleData.put("role", user.getRole());
		} catch(SoccerClubException s) {
			throw s;
		}catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new SoccerClubException("Something has gone wrong","Something has gone wrong",e.getMessage());
		}
		return new ResponseEntity<Map<String, Integer>>(userRoleData, HttpStatus.OK);

	}
	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<Void> register(HttpServletRequest request, HttpServletResponse response, @RequestBody UserDTO userDTO ) throws Exception{
		System.out.println("Inside Controller");
		try {
			loginServices.registerUser(userDTO);
		} catch(SoccerClubException s) {
			throw s;
		}catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new SoccerClubException("Something has gone wrong","Something has gone wrong",e.getMessage());
		}
		return new ResponseEntity<Void>(HttpStatus.OK);

	}
	@ExceptionHandler(SoccerClubException.class)
	public ResponseEntity<ErrorDTO> userDefinedExceptionHandeler(HttpServletRequest req, SoccerClubException e) {
		ErrorDTO errorJson = new ErrorDTO();
		errorJson.setErrorCode(e.getErrCode());
		errorJson.setErrorMessage(e.getErrMsg());
		errorJson.setDescription(e.getDescription());
		return new ResponseEntity<ErrorDTO>(errorJson, HttpStatus.NOT_IMPLEMENTED);

	}

	/**
	 *
	 * @param req
	 * @param exception
	 * @return
	 */
	@ExceptionHandler(Exception.class)
	public ResponseEntity<ErrorDTO> exceptionHandeler(HttpServletRequest req, Exception exception) {
		ErrorDTO errorJson = new ErrorDTO();
		errorJson.setErrorCode(Integer.toString(HttpStatus.INTERNAL_SERVER_ERROR.value()));
		errorJson.setErrorMessage("Something went wrong.Try Again");
		errorJson.setDescription(exception.toString());
		return new ResponseEntity<ErrorDTO>(errorJson, HttpStatus.NOT_IMPLEMENTED);
	}

}
