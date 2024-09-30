import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const recipes = [
  {
    title: "コシヒカリの炊き込みご飯",
    description: "季節の野菜と一緒に炊き上げる香り豊かな炊き込みご飯",
    image: "/recipe-takikomi.jpg"
  },
  {
    title: "コシヒカリのおにぎり",
    description: "シンプルながら美味しい、基本のおにぎりレシピ",
    image: "/recipe-onigiri.jpg"
  },
  {
    title: "コシヒカリの寿司",
    description: "新鮮な魚介類と合わせた本格的な寿司レシピ",
    image: "/recipe-sushi.jpg"
  }
];

const RecipeSection = () => {
  return (
    <section className="py-16 bg-snow-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-niigata-800">コシヒカリレシピ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{recipe.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-md mb-4" />
                <p>{recipe.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeSection;