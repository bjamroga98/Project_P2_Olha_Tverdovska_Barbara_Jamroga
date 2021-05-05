import { Injectable } from '@angular/core';
import {WarehouseService} from './warehouse.service';
import {Product} from '../app/products/product'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private warehouseService : WarehouseService) { }

  getProducts(){
    return this.warehouseService.get('api/products')
  }
}
