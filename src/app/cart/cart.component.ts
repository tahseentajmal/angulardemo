import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private cs:CartService, private fb:FormBuilder){}
  
  items=this.cs.getItems()

  checkoutForm = this.fb.group({
    name:'',
    address:''
  });

  onSubmit() : void {
    this.items = this.cs.clearCart();
    console.warn('Your Order has been submitted',this.checkoutForm.value);
    this.checkoutForm.reset();

  }

 
}