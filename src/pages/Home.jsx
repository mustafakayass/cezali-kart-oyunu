import React, { useState } from 'react';
import Card from "../components/Card";
import Layout from "../components/Layout";
import CategorySelector from "../components/CategorySelector";
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('kolay');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Layout>
      <div className="mb-16"></div> {/* Boşluk */}
      <CategorySelector onCategoryChange={handleCategoryChange} />
      <Card category={selectedCategory} />
      <Analytics />
    </Layout>
  );
}
