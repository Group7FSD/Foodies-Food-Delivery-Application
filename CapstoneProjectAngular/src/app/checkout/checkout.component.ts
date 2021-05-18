import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import {NgForm} from '@angular/forms';
import { Address } from '../model/address';
import { Order } from '../model/order';
 

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Purchase } from '../model/purchase';
import { Customer } from '../model/customer';
import { CheckoutService } from '../service/checkout.service';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
   
  user = new User();
  address= new Address();
  order=new Order();
  purchase!: Purchase;
  customer = new Customer();
 
  constructor(public checkoutService:CheckoutService,public route:Router) { }
  total_price:any=0;
  total_quantity:any="0";
  ngOnInit(): void {
   
  }
  //We already have decided the total_price and Total_quantity so we will get the previous value using LocalStorage
  ngDoCheck(){
    this.total_price=localStorage.getItem('total_price');
    this.total_quantity=localStorage.getItem('total_quantity');
   }
//This Method is used for sending the checkout details in the dataBase
 registerUser(data:any)
  {
  this.order.total_price=this.total_price;
  this.order.total_quantity=this.total_quantity;
  this.purchase = new Purchase(this.customer,this.address,this.order);
  this.checkoutService.checkoutFormPost(this.purchase).subscribe(
  data =>{
    alert("YOUR ORDER IS GOT PLACED");
    localStorage.clear();
    this.route.navigate(['']);
  },
  error => {
    alert("SOMETHING WENT WRONG");
  })
}

}
