import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from  './products/products.component'
import {VirtualMapComponent} from './virtual-map/virtual-map.component'

const routes: Routes = [
  {path: '', component: VirtualMapComponent},
  {path: 'products', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [ProductsComponent, VirtualMapComponent]