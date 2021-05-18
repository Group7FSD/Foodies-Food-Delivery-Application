package com.group.capstone.Capstone.Project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.group.capstone.Capstone.Project.dao.RegisterRepository;
import com.group.capstone.Capstone.Project.entity.User;

@Service
public class RegisterService {
	@Autowired
	private RegisterRepository repo;

	// Saving The User Registration data in the mapped database
	public User saveUser(User user) {
		return repo.save(user);
	}

	// Fetching The User Details From the database by email
	public User fetchUserByEmail(String email) {
		return repo.findByEmail(email);
	}

	// Fetching the user details from the database by email and password
	public User fetchUserByEmailAndPassword(String email, String password) {
		return repo.findByEmailAndPassword(email, password);
	}

}