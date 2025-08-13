"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
let ProductsService = class ProductsService {
    products = [];
    nextId = 1;
    findAll() {
        return this.products;
    }
    findOne(id) {
        const product = this.products.find((p) => p.id === id);
        if (!product) {
            throw new common_1.NotFoundException(`Product ${id} not found`);
        }
        return product;
    }
    create(dto) {
        const newProduct = {
            id: this.nextId++,
            name: dto.name,
            description: dto.description,
            price: dto.price,
            imageUrl: dto.imageUrl,
        };
        this.products.push(newProduct);
        return newProduct;
    }
    update(id, dto) {
        const existing = this.findOne(id);
        existing.name = dto.name ?? existing.name;
        existing.description = dto.description ?? existing.description;
        existing.price = dto.price ?? existing.price;
        existing.imageUrl = dto.imageUrl ?? existing.imageUrl;
        return existing;
    }
    remove(id) {
        const before = this.products.length;
        this.products = this.products.filter((p) => p.id !== id);
        if (this.products.length === before) {
            throw new common_1.NotFoundException(`Product ${id} not found`);
        }
        return { deleted: true };
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
//# sourceMappingURL=products.service.js.map