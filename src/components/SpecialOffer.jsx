import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Copy } from "lucide-react";

const SpecialOffer = () => {
  const [open, setOpen] = useState(false);
  const couponCode = "FIRST10OFF";

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(couponCode);
      toast.success("クーポンコードをコピーしました");
    } catch (err) {
      toast.error("クーポンコードのコピーに失敗しました");
    }
  };

  return (
    <section className="py-16 bg-red-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-red-800">期間限定特別オファー</h2>
        <p className="text-xl mb-6 text-gray-700">今なら初回購入の方に限り、10%OFFクーポンをプレゼント！</p>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-3 shadow-lg transform hover:scale-105 transition-transform duration-200">
              今すぐクーポンを取得
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center text-xl mb-4">10%OFFクーポン</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-sm text-gray-600">
                このクーポンコードは初回購入時のみ有効です。
              </p>
              <div className="flex items-center space-x-2 bg-gray-100 p-4 rounded-lg w-full">
                <code className="text-lg font-mono">{couponCode}</code>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleCopyClick}
                  className="h-8 w-8"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                ※ クーポンの有効期限は取得から2週間です。
              </p>
            </div>
          </DialogContent>
        </Dialog>
        <p className="mt-4 text-sm text-gray-600">※ クーポンの有効期限は取得から2週間です。</p>
      </div>
    </section>
  );
};

export default SpecialOffer;