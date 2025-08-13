import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './products/dto/create-product.dto';
import { UpdateProductDto } from './products/dto/update-product.dto';

export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
}

@Injectable()
export class ProductsService {
  private products: Product[] = [];
  private nextId = 1;

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return product;
  }

  create(dto: CreateProductDto): Product {
    const newProduct: Product = {
      id: this.nextId++,
      name: dto.name,
      description: dto.description,
      price: dto.price,
      imageUrl: dto.imageUrl,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, dto: UpdateProductDto): Product {
    const existing = this.findOne(id);
    existing.name = dto.name ?? existing.name;
    existing.description = dto.description ?? existing.description;
    existing.price = dto.price ?? existing.price;
    existing.imageUrl = dto.imageUrl ?? existing.imageUrl;
    return existing;
  }

  remove(id: number): { deleted: true } {
    const before = this.products.length;
    this.products = this.products.filter((p) => p.id !== id);
    if (this.products.length === before) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return { deleted: true } as const;
  }
}
