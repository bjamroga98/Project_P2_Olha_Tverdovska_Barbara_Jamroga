import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule } from '@angular/forms';
// CSS Libary
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {SlideMenuModule} from 'primeng/slidemenu';
import {ToolbarModule} from 'primeng/toolbar';
import {InputTextModule} from 'primeng/inputtext';
import {DynamicDialogModule} from 'primeng/dynamicdialog';

import {TableModule} from 'primeng/table';
//Components
import { MenuComponent } from './menu/menu.component';
//import { VirtualMapComponent } from './virtual-map/virtual-map.component';
//import { ProductsComponent } from './products/products.component'

//Services
import{WarehouseService} from '../services/warehouse.service'
import{ShelfsService} from '../services/shelfs.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenuModule,
    SlideMenuModule,
    BrowserAnimationsModule,
    ToolbarModule,
    InputTextModule,
    DynamicDialogModule,
    HttpClientModule,
    FormsModule,
    TableModule
  
  ],
  providers: [WarehouseService,ShelfsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
