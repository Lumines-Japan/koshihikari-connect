import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Twitter, Instagram } from 'lucide-react';

const socialPosts = [
  {
    platform: 'Twitter',
    content: '今年も美味しいコシヒカリが収穫できました！皆様に感謝です。 #新潟コシヒカリ #収穫祭',
    image: 'https://dffgvfuyuzktboucthiq.supabase.co/storage/v1/object/public/company-images/asset/photo-1633555412302.jpg'
  },
  {
    platform: 'Instagram',
    content: '朝日に輝く稲穂。自然の恵みに感謝しながら、今日も一日がんばります！ #田んぼの風景 #農家の日常',
    image: 'https://dffgvfuyuzktboucthiq.supabase.co/storage/v1/object/public/company-images/asset/photo-1730700521745.jpg'
  },
  {
    platform: 'Twitter',
    content: '新商品のお知らせ！今年の新米コシヒカリを使った「おにぎりセット」が登場です。ぜひお試しください！',
    image: 'https://dffgvfuyuzktboucthiq.supabase.co/storage/v1/object/public/company-images/asset/photo-1556906889.jpg'
  }
];

const SocialFeed = () => {
  return (
    <section className="py-16 bg-snow-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-niigata-800">SNSフィード</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialPosts.map((post, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {post.platform === 'Twitter' ? (
                    <Twitter className="text-blue-400 mr-2" />
                  ) : (
                    <Instagram className="text-pink-500 mr-2" />
                  )}
                  <span className="font-semibold">{post.platform}</span>
                </div>
                <img src={post.image} alt={`${post.platform} post`} className="w-full h-48 object-cover rounded-md mb-4" />
                <p>{post.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;