package com.group.capstone.Capstone.Project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.group.capstone.Capstone.Project.dao.AddressRepository;
import com.group.capstone.Capstone.Project.dao.CustomerRepository;
import com.group.capstone.Capstone.Project.dao.OrderRepository;
import com.group.capstone.Capstone.Project.dto.Purchase;
import com.group.capstone.Capstone.Project.entity.Address;
import com.group.capstone.Capstone.Project.entity.Customer;
import com.group.capstone.Capstone.Project.entity.Order;

@Service
public class CheckoutServiceImpl implements CheckoutService {

	@Autowired
	CustomerRepository customerRepository;

	public CheckoutServiceImpl(CustomerRepository customerRepository) {
		this.customerRepository = customerRepository;
	}

	// Saving The Order Details
	@Override
	public void saveOrderDetails(Purchase purchase) {
		// Fetching The Order From DTO
		Order order = purchase.getOrder();
		// Fetching The Customer From DTO
		Customer customer = purchase.getCustomer();
		// Fetching The Address from DTO
		Address address = purchase.getAddress();
		// Setting the address inside order for one to one mapping
		order.setAddress(address);
		// Setting the order inside customer for one to many mapping
		customer.add(order);
		// Saving the details using respective repository
		customerRepository.save(customer);
	}

}
