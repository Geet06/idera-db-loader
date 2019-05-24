package com.idera.Server.Loader.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.idera.Server.Loader.Dao.ServerDetailsDao;
import com.idera.Server.Loader.model.Server;

@Service
public class LoginDetailsServiceImpl implements LoginDetailsService {

	
	@Autowired
	ServerDetailsDao serverDetailsDao;
	
	@Override
	public void addDetails(Server detailsObj) {
		// TODO Auto-generated method stub
		serverDetailsDao.addedDetails(detailsObj);

	}

}
