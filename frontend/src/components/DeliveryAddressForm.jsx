import React from "react";

const DeliveryAddressForm = ({ formData, setFormData, errors }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold">Delivery Address</h2>
    <div>
      <label className="block mb-2 text-gray-700">Full Name</label>
      <input
        type="text"
        className={`w-full p-3 rounded-lg border ${errors.fullName ? "border-red-500" : "border-gray-200"}`}
        value={formData.fullName}
        onChange={(e) =>
          setFormData({
            ...formData,
            fullName: e.target.value,
          })
        }
      />
      {errors.fullName && (
        <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
      )}
    </div>
    <div>
      <label className="block mb-2 text-gray-700">Address</label>
      <input
        type="text"
        className={`w-full p-3 rounded-lg border ${errors.address ? "border-red-500" : "border-gray-200"}`}
        value={formData.address}
        onChange={(e) =>
          setFormData({
            ...formData,
            address: e.target.value,
          })
        }
      />
      {errors.address && (
        <p className="text-red-500 text-sm mt-1">{errors.address}</p>
      )}
    </div>
    <div>
      <label className="block mb-2 text-gray-700">Phone Number</label>
      <input
        type="tel"
        className={`w-full p-3 rounded-lg border ${errors.phone ? "border-red-500" : "border-gray-200"}`}
        value={formData.phone}
        onChange={(e) =>
          setFormData({
            ...formData,
            phone: e.target.value,
          })
        }
      />
      {errors.phone && (
        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
      )}
    </div>
  </div>
);

export default DeliveryAddressForm; 