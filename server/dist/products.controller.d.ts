import { ProductsService } from './products.service';
import { CreateProductDto } from './products/dto/create-product.dto';
import { UpdateProductDto } from './products/dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(): import("./products.service").Product[];
    findOne(id: number): import("./products.service").Product;
    create(dto: CreateProductDto): import("./products.service").Product;
    update(id: number, dto: UpdateProductDto): import("./products.service").Product;
    remove(id: number): {
        deleted: true;
    };
}
