import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    product: '',
    quantity: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('注文データ:', formData);
    // ここで注文処理やAPIリクエストを行う
    alert('注文が送信されました。ありがとうございます！');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">お名前</Label>
        <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="email">メールアドレス</Label>
        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="address">住所</Label>
        <Textarea id="address" name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="product">商品名</Label>
        <Input id="product" name="product" value={formData.product} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="quantity">数量</Label>
        <Input id="quantity" name="quantity" type="number" value={formData.quantity} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="notes">備考</Label>
        <Textarea id="notes" name="notes" value={formData.notes} onChange={handleChange} />
      </div>
      <Button type="submit">注文する</Button>
    </form>
  );
};

export default OrderForm;