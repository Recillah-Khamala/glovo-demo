import React from 'react';

const MapView = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-glovo-red">Map View</h2>
            {/* Integrate a mapping library here, e.g., Google Maps or Leaflet */}
            <div className="h-64 bg-gray-200 rounded-lg">Map Placeholder</div>
        </div>
    );
};

export default MapView;
