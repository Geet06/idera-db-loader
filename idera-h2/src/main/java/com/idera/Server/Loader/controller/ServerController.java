package com.idera.Server.Loader.controller;

import java.util.ArrayList;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.idera.Server.Loader.model.Server;
import com.idera.Server.Loader.service.LoginDetailsService;

@RestController
@RequestMapping("/api/server")
public class ServerController {
	
	@Autowired
	
	LoginDetailsService loginDetailsService;
	
	private static final Log logger = LogFactory.getLog(ServerController.class);
	

	@RequestMapping("/list")
	public ResponseEntity<List<Server>> getAuthenticatedUser() {
	
		List<Server> server_list= new ArrayList<Server>();
		
		Server server =new Server(Long.valueOf(1),23,"Abcd","password1",true, null);
		
		Server server1= new Server(Long.valueOf(2),22,"Def","password2",false, null);
		
		Server server2= new Server(Long.valueOf(3),11,"Fgh","password3",true, null);
		
		server_list.add(server);
		server_list.add(server1);
		server_list.add(server2);
		
		return new ResponseEntity<>(server_list,
				HttpStatus.OK);
	}
	
	@RequestMapping(value="/add",method=RequestMethod.POST)
	public boolean addServerDetails(@RequestBody Server detailsObj) {  
		loginDetailsService.addDetails(detailsObj);
		logger.info(detailsObj.toString());
		return false;
	
	}
	
	
	
	
	
}
