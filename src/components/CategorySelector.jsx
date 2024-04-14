import React, { useState } from 'react';

const CategorySelector = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('kolay');

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="flex justify-center items-center">
      <label htmlFor="category" className="mr-2 text-gray-400">Zorluk Seviyesi:</label>
      <select id="category" onChange={handleCategoryChange} value={selectedCategory} className="appearance-none bg-white border border-gray-400 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        <option value="kolay">Kolay</option>
        <option value="orta">Orta</option>
        <option value="zor">Zor</option>
      </select>
    </div>
  );
};

export default CategorySelector;
