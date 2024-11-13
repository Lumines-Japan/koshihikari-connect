import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Layout from '../components/Layout';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../lib/stripe';
import { useToast } from "@/components/ui/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  });

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">読み込み中...</div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">エラーが発生しました。</div>
        </div>
      </Layout>
    );
  }

  const product = products?.find(p => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">商品が見つかりません。</div>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: product.default_price.id,
          quantity: 1,
        }),
      });

      const { url } = await response.json();
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        title: "エラー",
        description: "カートへの追加に失敗しました。",
        variant: "destructive",
      });
    } finally {
      setIsAddingToCart(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="w-full h-[400px]">
              <img 
                src={product.images[selectedImage] || '/placeholder.svg'} 
                alt={product.name} 
                className="w-full h-full object-contain" 
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2 mt-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 flex-shrink-0 ${
                      selectedImage === index ? 'border-2 border-niigata-500' : 'border border-snow-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - 画像 ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div>
            <p className="text-xl mb-4">{product.description}</p>
            <p className="font-bold text-2xl mb-4">
              価格: ¥{(product.default_price.unit_amount).toLocaleString()}
            </p>
            <Button 
              className="mb-4" 
              onClick={handleAddToCart}
              disabled={isAddingToCart}
            >
              {isAddingToCart ? '処理中...' : 'カートに追加'}
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;