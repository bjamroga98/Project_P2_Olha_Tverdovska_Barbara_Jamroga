import { Injectable } from '@angular/core';
import {WarehouseService} from './warehouse.service'

@Injectable({
  providedIn: 'root'
})
export class ShelfsService {

  constructor(private warehouseService : WarehouseService) { }

  getShelfs(){
    return this.warehouseService.get('api/shelfs')
  }
}
