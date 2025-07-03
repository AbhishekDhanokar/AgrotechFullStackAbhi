package com.agrotech.AgrotechBackend.model;

import jakarta.persistence.*;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;
    private String phone;
    private String state;
    private String district;
    private String typeOfFarming;
    private String landArea;
    private String preferredLanguage;
    
    public User(){}

	public User(Long id, String name, String email, String password, String phone, String state, String district,
			String typeOfFarming, String landArea, String preferredLanguage) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.phone = phone;
		this.state = state;
		this.district = district;
		this.typeOfFarming = typeOfFarming;
		this.landArea = landArea;
		this.preferredLanguage = preferredLanguage;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getTypeOfFarming() {
		return typeOfFarming;
	}

	public void setTypeOfFarming(String typeOfFarming) {
		this.typeOfFarming = typeOfFarming;
	}

	public String getLandArea() {
		return landArea;
	}

	public void setLandArea(String landArea) {
		this.landArea = landArea;
	}

	public String getPreferredLanguage() {
		return preferredLanguage;
	}

	public void setPreferredLanguage(String preferredLanguage) {
		this.preferredLanguage = preferredLanguage;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password + ", phone=" + phone
				+ ", state=" + state + ", district=" + district + ", typeOfFarming=" + typeOfFarming + ", landArea="
				+ landArea + ", preferredLanguage=" + preferredLanguage + "]";
	}
   
   
}
