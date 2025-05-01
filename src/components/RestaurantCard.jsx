import React from 'react';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={restaurant.image_url}
        alt={restaurant.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{restaurant.name}</h3>
        <p className="text-gray-600">{restaurant.description}</p>
        <div className="mt-2 flex items-center">
          <span className="text-yellow-500">★</span>
          <span className="ml-1 text-gray-600">{restaurant.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard; 