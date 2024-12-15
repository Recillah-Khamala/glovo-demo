import React from "react";
import { CreditCard, Phone, DollarSign } from "lucide-react";

const PaymentSection = ({ formData, setFormData, errors }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold">Payment Method</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {["Card", "Mpesa", "Cash"].map((method) => (
        <button
          key={method}
          className={`p-4 rounded-lg border ${formData.paymentMethod === method ? "border-[#FFC244] bg-[#FFF9E6]" : "border-gray-200"} flex items-center justify-center gap-2`}
          onClick={() =>
            setFormData({
              ...formData,
              paymentMethod: method,
            })
          }
        >
          {method === "Card" && <CreditCard />}
          {method === "Mpesa" && <Phone />}
          {method === "Cash" && <DollarSign />}
          {method}
        </button>
      ))}
    </div>
    {errors.paymentMethod && (
      <p className="text-red-500 text-sm">{errors.paymentMethod}</p>
    )}
  </div>
);

export default PaymentSection; 