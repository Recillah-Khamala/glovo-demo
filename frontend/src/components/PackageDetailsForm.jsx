import React from "react";

const PackageDetailsForm = ({ formData, setFormData, errors }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold">Package Details</h2>
    
    <div>
      <label className="block mb-2 text-gray-700">Sender's Name</label>
      <input
        type="text"
        className={`w-full p-3 rounded-lg border ${errors.senderName ? "border-red-500" : "border-gray-200"}`}
        value={formData.senderName}
        onChange={(e) =>
          setFormData({
            ...formData,
            senderName: e.target.value,
          })
        }
      />
      {errors.senderName && (
        <p className="text-red-500 text-sm mt-1">{errors.senderName}</p>
      )}
    </div>

    <div>
      <label className="block mb-2 text-gray-700">Sender's Phone Number</label>
      <input
        type="tel"
        className={`w-full p-3 rounded-lg border ${errors.senderPhone ? "border-red-500" : "border-gray-200"}`}
        value={formData.senderPhone}
        onChange={(e) =>
          setFormData({
            ...formData,
            senderPhone: e.target.value,
          })
        }
      />
      {errors.senderPhone && (
        <p className="text-red-500 text-sm mt-1">{errors.senderPhone}</p>
      )}
    </div>

    <div>
      <label className="block mb-2 text-gray-700">Package Tracking Number</label>
      <input
        type="text"
        className={`w-full p-3 rounded-lg border ${errors.trackingNumber ? "border-red-500" : "border-gray-200"}`}
        value={formData.trackingNumber}
        onChange={(e) =>
          setFormData({
            ...formData,
            trackingNumber: e.target.value,
          })
        }
      />
      {errors.trackingNumber && (
        <p className="text-red-500 text-sm mt-1">{errors.trackingNumber}</p>
      )}
    </div>

    <div>
      <label className="block mb-2 text-gray-700">Package Origin</label>
      <input
        type="text"
        className={`w-full p-3 rounded-lg border ${errors.packageOrigin ? "border-red-500" : "border-gray-200"}`}
        value={formData.packageOrigin}
        onChange={(e) =>
          setFormData({
            ...formData,
            packageOrigin: e.target.value,
          })
        }
      />
      {errors.packageOrigin && (
        <p className="text-red-500 text-sm mt-1">{errors.packageOrigin}</p>
      )}
    </div>

    <div>
      <label className="block mb-2 text-gray-700">Package Type</label>
      <select
        className={`w-full p-3 rounded-lg border ${errors.packageType ? "border-red-500" : "border-gray-200"}`}
        value={formData.packageType}
        onChange={(e) =>
          setFormData({
            ...formData,
            packageType: e.target.value,
          })
        }
      >
        <option value="">Select package type</option>
        <option value="documents">Documents</option>
        <option value="electronics">Electronics</option>
        <option value="furniture">Furniture</option>
        <option value="foodstuff">Foodstuff</option>
      </select>
      {errors.packageType && (
        <p className="text-red-500 text-sm mt-1">{errors.packageType}</p>
      )}
    </div>

    <div>
      <label className="block mb-2 text-gray-700">Dimensions</label>
      <select
        className={`w-full p-3 rounded-lg border ${errors.dimensions ? "border-red-500" : "border-gray-200"}`}
        value={formData.dimensions}
        onChange={(e) =>
          setFormData({
            ...formData,
            dimensions: e.target.value,
          })
        }
      >
        <option value="">Select dimensions</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      {errors.dimensions && (
        <p className="text-red-500 text-sm mt-1">{errors.dimensions}</p>
      )}
    </div>
  </div>
);

export default PackageDetailsForm; 