"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  category: string;
}

const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.5,
    image:
      "https://cdn.shopify.com/s/files/1/0553/0419/2034/files/LDP-Blue-LI-01-b_1f78d79d-ca8a-4e3f-a225-682bb7b3c694.jpg",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.8,
    image:
      "https://cdn.shopify.com/s/files/1/0553/0419/2034/files/LDP-Blue-LI-01-b_1f78d79d-ca8a-4e3f-a225-682bb7b3c694.jpg",
    category: "Wearables",
  },
  {
    id: 3,
    name: "Portable Phone Charger",
    price: 29.99,
    rating: 4.3,
    image:
      "https://cdn.shopify.com/s/files/1/0553/0419/2034/files/LDP-Blue-LI-01-b_1f78d79d-ca8a-4e3f-a225-682bb7b3c694.jpg",
    category: "Accessories",
  },
  {
    id: 4,
    name: "USB-C Hub Adapter",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.6,
    image:
      "https://cdn.shopify.com/s/files/1/0553/0419/2034/files/LDP-Blue-LI-01-b_1f78d79d-ca8a-4e3f-a225-682bb7b3c694.jpg",
    category: "Accessories",
  },
  {
    id: 5,
    name: "Wireless Mouse",
    price: 39.99,
    rating: 4.4,
    image:
      "https://cdn.shopify.com/s/files/1/0553/0419/2034/files/LDP-Blue-LI-01-b_1f78d79d-ca8a-4e3f-a225-682bb7b3c694.jpg",
    category: "Electronics",
  },
  {
    id: 6,
    name: "Laptop Stand",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.7,
    image:
      "https://cdn.shopify.com/s/files/1/0553/0419/2034/files/LDP-Blue-LI-01-b_1f78d79d-ca8a-4e3f-a225-682bb7b3c694.jpg",
    category: "Accessories",
  },
];

export function ProductGrid() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : i < rating
            ? "fill-yellow-400/50 text-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <div className="flex justify-center mb-4 gap-2">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>

        <CarouselContent className="-ml-2 md:-ml-4">
          {sampleProducts.map((product) => (
            <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-1/2">
              <Card className="h-full">
                <CardContent className="p-3">
                  <div className="aspect-square mb-3 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                      {product.category}
                    </div>

                    <h4 className="font-medium text-sm leading-tight line-clamp-1">
                      {product.name}
                    </h4>

                    <div className="flex items-center gap-1">
                      {renderStars(product.rating)}
                      <span className="text-xs text-gray-600 ml-1">
                        ({product.rating})
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-gray-500 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    <Button size="sm" className="w-full mt-2" variant="outline">
                      <ShoppingCart className="w-3 h-3 mr-1" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
