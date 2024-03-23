// src/types/product.ts
export interface Product {
    id: string;
    gender: string;
    publish: string;
    category: string;
    available: number;
    priceSale: string;
    taxes: string;
    quantity: number;
    sizes: string[];
    inventoryType: string;
    images: string[];
    tags: string[];
    code: string;
    description: string;
    newLabel: {
        enabled: boolean;
        content: string;
    };
    sku: string;
    saleLabel: {
        enabled: boolean;
        content: string;
    };
    name: string;
    price: string;
    coverUrl: string;
    totalRatings: string;
    totalSold: number;
    totalReviews: number;
    subDescription: string;
    colors: string[];
    createdAt: Date;
    updatedAt: Date;
}
