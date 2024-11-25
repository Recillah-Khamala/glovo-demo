const BASE_URL = "http://localhost:3000/api/transport_orders";

export const createTransportOrder = async (orderData) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderData),
  });
  return response.json();
};
