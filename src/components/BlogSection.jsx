import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
  {
    title: "新潟コシヒカリの魅力",
    content: "新潟県のコシヒカリが日本一の評価を受ける理由や、その特徴について詳しく解説します。",
    date: "2024-03-15"
  },
  {
    title: "コシヒカリの美味しい炊き方",
    content: "プロの料理人が教える、コシヒカリを最高に美味しく炊く方法をご紹介します。",
    date: "2024-03-10"
  },
  {
    title: "コシヒカリ生産者インタビュー",
    content: "40年以上コシヒカリを作り続ける農家の方にお話を伺いました。その思いと技術に迫ります。",
    date: "2024-03-05"
  }
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-snow-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-niigata-800">ブログ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{post.content}</p>
                <p className="text-sm text-gray-500">{post.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;