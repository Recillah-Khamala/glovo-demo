import React from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantList = ({ restaurants = [] }) => {
  if (!restaurants || restaurants.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No restaurants available
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList; 