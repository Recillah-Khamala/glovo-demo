import React from 'react';

const DeliveryDetails = ({ delivery }) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-glovo-red">Delivery Details</h2>
            <p><strong>Item:</strong> {delivery.item}</p>
            <p><strong>From:</strong> {delivery.from}</p>
            <p><strong>To:</strong> {delivery.to}</p>
            <p><strong>Status:</strong> {delivery.status}</p>
        </div>
    );
};

export default DeliveryDetails;
