import React from 'react';

const Notification = ({ message }) => {
    return (
        <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
            <p>{message}</p>
        </div>
    );
};

export default Notification;
