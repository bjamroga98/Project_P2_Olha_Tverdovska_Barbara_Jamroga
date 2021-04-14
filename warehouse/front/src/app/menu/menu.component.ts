import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {label: 'Wyszukaj', icon: 'pi pi-fw pi-search'},
          {label: 'Profil', icon: 'pi pi-fw pi-user'},
          {label: 'Zamwienia', icon: 'pi pi-fw pi-tag'},
          {label: 'Artukuły', icon: 'pi pi-fw pi-shopping-cart'},
          {label: 'Statystyki', icon: 'pi pi-fw pi-chart-bar'},
          {label: 'Użytkownicy', icon: 'pi pi-fw pi-user-edit'},
          {label: 'Moje notatki', icon: 'pi pi-fw pi-pencil'},
          {label: 'Wyloguj', icon: 'pi pi-fw pi-sign-out'}
      ];
  }
    
}
