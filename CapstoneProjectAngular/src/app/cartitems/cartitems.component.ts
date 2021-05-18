import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { CartService } from '../service/cart.service';
import restaurantsData from '../jsonFile/restaurant.json';
@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrls: ['./cartitems.component.css']
})
export class CartitemsComponent implements OnInit {
restaurants!:Restaurant[];
quantity:number=0;
total_price:any;
isEnable:number=0;
valueEnable:boolean=true;
// In this component we are fetching the data from the local storage 
  constructor(public cartService:CartService) { 
    this.restaurants=JSON.parse(localStorage.getItem("users") || "[]");
    this.total_price=localStorage.getItem('total_price');
  }

  ngOnInit(): void {
  }
  
  ngDoCheck(){
    this.isEnable=this.cartService.getSuccessFlag();
    if(this.isEnable === 1)
    {
      this.valueEnable=false;
    }
  }
 
}
