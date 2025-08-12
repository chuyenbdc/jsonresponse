import { CreateProductDto } from './products/dto/create-product.dto';
import { UpdateProductDto } from './products/dto/update-product.dto';
export interface Product {
    id: number;
    name: string;
    description?: string;
    price: number;
    imageUrl?: string;
}
export declare class ProductsService {
    private products;
    private nextId;
    findAll(): Product[];
    findOne(id: number): Product;
    create(dto: CreateProductDto): Product;
    update(id: number, dto: UpdateProductDto): Product;
    remove(id: number): {
        deleted: true;
    };
}
