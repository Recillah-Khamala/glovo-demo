import React from 'react';

const ActiveDeliveries = () => {
  const deliveries = [
    { id: 1, title: 'Rice from Mwea', description: 'Delivered to your door', status: 'In Transit' },
    { id: 2, title: 'Sweet Potatoes from Kitale', description: 'Freshly picked', status: 'Delivered' },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-glovo-green">Active Deliveries</h2>
      <ul>
        {deliveries.map((delivery) => (
          <li key={delivery.id} className="border-b py-2">
            <h3 className="font-semibold text-glovo-green">{delivery.title}</h3>
            <p className="text-gray-600">{delivery.description}</p>
            <span className="text-sm text-glovo-yellow">{delivery.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActiveDeliveries; 