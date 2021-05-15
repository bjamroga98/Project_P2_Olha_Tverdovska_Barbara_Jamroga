import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from  './products/products.component'
import {VirtualMapComponent} from './virtual-map/virtual-map.component'
import {CreatorComponent} from './creator/creator.component'

const routes: Routes = [
  {path: '', component: VirtualMapComponent},
  {path: 'products', component: ProductsComponent},
  {path:'creator', component:CreatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [ProductsComponent, VirtualMapComponent,CreatorComponent]