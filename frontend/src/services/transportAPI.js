const BASE_URL = "http://localhost:3000/api/transport_orders";

export const fetchActiveDeliveries = async () => {
    const response = await fetch(`${BASE_URL}/active`);
    if (!response.ok) {
        throw new Error('Failed to fetch active deliveries');
    }
    return response.json();
};

export const createTransportOrder = async (orderData) => {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
    });
    return response.json();
};
