package com.idera.Server.Loader.Dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.idera.Server.Loader.model.Server;


@Repository
public class ServerDetailsImpl implements ServerDetailsDao {
	@Autowired
    JdbcTemplate jdbcTemplate;

	@Override
	public void addedDetails(Server detailsObj) {
		
		// TODO Auto-generated method stub
		jdbcTemplate.update("insert into server (id,LOGIN_ID, SERVER_NAME,password,activity,time) " + "values(?,?,?,?,?,?)",
		        new Object[] {
		        		detailsObj.getId(),detailsObj.getLoginId(),detailsObj.getServerName(),detailsObj.getPassword(), detailsObj.isActivity(), detailsObj.getTime()
		        });
	}

}
