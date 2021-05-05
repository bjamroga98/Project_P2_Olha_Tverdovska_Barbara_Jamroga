import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {Product} from './product'



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products:any
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data:Product[]) => {
      this.products = data.values
      console.log( this.products)
    })
  }

}
