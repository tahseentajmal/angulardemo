import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product : Product | undefined;
  constructor(private ar : ActivatedRoute, private cs: CartService){}

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.ar.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
  
    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Product) {
    this.cs.addToCart(product);
    window.alert("The Product has been added to your cart!")
  }
}
