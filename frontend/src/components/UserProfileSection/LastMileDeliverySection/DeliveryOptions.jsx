import React from 'react';

const DeliveryOptions = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-glovo-red">Delivery Options</h2>
            <div className="flex flex-col">
                <label className="flex items-center">
                    <input type="radio" name="deliveryOption" value="standard" className="mr-2" />
                    Standard Delivery
                </label>
                <label className="flex items-center">
                    <input type="radio" name="deliveryOption" value="express" className="mr-2" />
                    Express Delivery
                </label>
            </div>
        </div>
    );
};

export default DeliveryOptions;
