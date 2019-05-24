package com.idera.Server.Loader.model;

import java.sql.Timestamp;
import javax.persistence.Entity;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;
@Entity
public class Server {
	@Id
//	 @GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private int loginId;
	private String serverName;
	private String password;
	boolean activity;
	@CreationTimestamp 
	private Timestamp time;
	public Server() {
		
	}	
	
	@Override
	public String toString() {
		return "Server [id=" + id + ", loginId=" + loginId + ", serverName=" + serverName + ", password=" + password
				+ ", activity=" + activity + ", time=" + time + "]";
	}

	public Server(Long id, int lId,String name,String password, boolean activity,Timestamp time) {
		this.id=id;
		this.loginId=lId;
		this.serverName=name;
		this.password=password;
		this.activity=activity;
		this.setTime(time);
	}
		
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public int getLoginId() {
		return loginId;
	}
	public void setLoginId(int loginId) {
		this.loginId = loginId;
	}
	public String getServerName() {
		return serverName;
	}
	public void setServerName(String serverName) {
		this.serverName = serverName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public boolean isActivity() {
		return activity;
	}
	public void setActivity(boolean activity) {
		this.activity = activity;
	}
	public Timestamp getTime() {
		return time;
	}
	public void setTime(Timestamp time) {
		this.time = time;
	}
	

	
}
