import { Routes } from '@angular/router';
import { ProductsListComponent } from './products/products-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsListComponent },
];
