import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <div className="relative group cursor-pointer">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={category.image_url}
          alt={category.name}
          className="object-cover object-center group-hover:opacity-75 transition-opacity duration-200"
        />
      </div>
      <div className="mt-2 text-center">
        <h3 className="text-sm font-medium text-gray-900">{category.name}</h3>
      </div>
    </div>
  );
};

export default CategoryCard; 