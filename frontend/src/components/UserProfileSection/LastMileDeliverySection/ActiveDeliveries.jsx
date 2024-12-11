import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActiveDeliveries } from '../../../redux/slices/lastMileSlice';
import ActiveDeliveryItem from './ActiveDeliveryItem';

const ActiveDeliveries = () => {
    const dispatch = useDispatch();
    const activeDeliveries = useSelector((state) => state.lastMile.activeDeliveries);

    useEffect(() => {
        dispatch(fetchActiveDeliveries());
    }, [dispatch]);

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-glovo-red">Active Deliveries</h2>
            <ul>
                {activeDeliveries.map((delivery) => (
                    <ActiveDeliveryItem key={delivery.id} delivery={delivery} />
                ))}
            </ul>
        </div>
    );
};

export default ActiveDeliveries;
