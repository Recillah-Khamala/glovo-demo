import React from "react";
import { CheckCircle } from "lucide-react";

const TrackingView = ({ formData }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold">Tracking Information</h2>
    <div className="bg-[#FFF9E6] p-6 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg font-semibold">Tracking Number</span>
        <span className="text-[#FFC244] font-mono">
          {Math.random().toString(36).substring(2, 10).toUpperCase()}
        </span>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <CheckCircle className="text-green-500" />
          <span>Order Confirmed</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-[#FFC244]" />
          <span>Package Processing</span>
        </div>
      </div>
    </div>
  </div>
);

export default TrackingView; 