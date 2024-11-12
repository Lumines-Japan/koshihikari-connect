import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="flex flex-col">
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            {product.images[0] && (
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="text-lg font-bold mt-2">
              ¥{(product.default_price.unit_amount).toLocaleString()}
            </p>
          </CardContent>
          <CardFooter>
            <Link to={`/product/${product.id}`} className="w-full">
              <Button className="w-full">詳細を見る</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductGrid;