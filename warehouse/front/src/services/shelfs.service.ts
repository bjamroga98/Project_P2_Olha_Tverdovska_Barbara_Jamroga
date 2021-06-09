import { ErrorHandler, Injectable } from '@angular/core';
import {WarehouseService} from './warehouse.service'

@Injectable({
  providedIn: 'root'
})
export class ShelfsService {

  constructor(private warehouseService : WarehouseService) { }

  getShelfs(){
    return this.warehouseService.get('api/shelfs')
  }
  getShelfsWithProductCode(productCode:string){
    return this.warehouseService.get(`api/shelfs/locate/${productCode}`)
  }
  updateShelf(shelf){
    return this.warehouseService.post(`api/shelfs/update`, shelf)
  }
  addShelf(shelf){
    return this.warehouseService.post(`api/shelfs/add`, shelf)
  }
  deleteShelf(name:string){
    return this.warehouseService.delete(`api/shelfs/delete/${name}`)
  }
}
