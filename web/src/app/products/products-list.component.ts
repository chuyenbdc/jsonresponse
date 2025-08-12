import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
}

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <section class="products">
      <h1>Products</h1>
      <div *ngIf="loading">Loading...</div>
      <ul *ngIf="!loading">
        <li *ngFor="let p of products">
          <strong>{{ p.name }}</strong>
          <span> - {{ p.price | currency }}</span>
          <p *ngIf="p.description">{{ p.description }}</p>
        </li>
      </ul>
    </section>
  `,
  styles: [
    `
      .products { padding: 1rem; }
      ul { list-style: none; padding: 0; }
      li { padding: 0.5rem 0; border-bottom: 1px solid #eee; }
    `,
  ],
})
export class ProductsListComponent {
  private http = inject(HttpClient);
  products: Product[] = [];
  loading = true;

  constructor() {
    this.http.get<Product[]>('/api/products').subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}