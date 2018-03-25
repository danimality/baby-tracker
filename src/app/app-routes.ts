import { Routes } from "@angular/router";
import { CalendarComponent } from "./calendar/calendar.component";
import { HomeComponent } from "./home/home.component";
import { ItemListComponent } from "./item-list/item-list.component";
import { ItemComponent } from "./item/item.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'item/:id', component: ItemComponent},
  {
    path: 'items',
    component: ItemListComponent,
    data: {title: 'Heroes List'}
  },
  {
    path: '',
    redirectTo: '/items',
    pathMatch: 'full'
  },
  {path: '**', component: PageNotFoundComponent}
];
