import React from 'react';

const ActiveDeliveryItem = ({ delivery }) => {
    return (
        <li className="border-b py-2">
            <h3 className="font-semibold text-glovo-dark">{delivery.title}</h3>
            <p className="text-gray-600">{delivery.description}</p>
            <span className="text-sm text-glovo-green">{delivery.status}</span>
        </li>
    );
};

export default ActiveDeliveryItem;
