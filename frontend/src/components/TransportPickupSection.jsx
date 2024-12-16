import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Clock,
  Package,
  MapPin,
  Truck,
  ChevronRight,
  ChevronLeft,
  CreditCard,
  Phone,
  DollarSign,
  CheckCircle,
} from "lucide-react";
import PackageDetailsForm from "./PackageDetailsForm";
import DeliveryAddressForm from "./DeliveryAddressForm";
import PaymentSection from "./PaymentSection";
import TrackingView from "./TrackingView";

const STEPS = [
  { id: "company-select", label: "Select Company" },
  { id: "package-details", label: "Package Details" },
  { id: "delivery-address", label: "Delivery Address" },
  { id: "payment", label: "Payment" },
  { id: "tracking", label: "Tracking" },
];

const Stepper = ({ currentStep }) => (
  <div className="flex justify-between items-center mb-8">
    {STEPS.map((step, index) => (
      <div
        key={step.id}
        className="flex items-center"
        style={{
          flex: index === STEPS.length - 1 ? "0 0 auto" : 1,
        }}
      >
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            STEPS.findIndex((s) => s.id === currentStep) >= index
              ? "bg-[#FFC244]"
              : "bg-gray-200"
          }`}
        >
          {index + 1}
        </div>
        {index < STEPS.length - 1 && (
          <div
            className={`h-1 flex-grow mx-2 ${
              STEPS.findIndex((s) => s.id === currentStep) > index
                ? "bg-[#FFC244]"
                : "bg-gray-200"
            }`}
          />
        )}
      </div>
    ))}
  </div>
);

export default function TransportPickupSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentStep, setCurrentStep] = useState("company-select");
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [formData, setFormData] = useState({
    packageType: "",
    dimensions: "",
    senderName: "",
    senderPhone: "",
    trackingNumber: "",
    packageOrigin: "",
    fullName: "",
    address: "",
    phone: "",
    paymentMethod: "",
  });
  const [errors, setErrors] = useState({});
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/transport_companies');
        if (!response.ok) {
          throw new Error('Failed to fetch companies');
        }
        const data = await response.json();
        setCompanies(data.companies);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  const validateStep = () => {
    const newErrors = {};
    switch (currentStep) {
      case "company-select":
        if (!selectedCompany) newErrors.company = "Please select a company";
        break;
      case "package-details":
        if (!formData.packageType) newErrors.packageType = "Required field";
        if (!formData.dimensions) newErrors.dimensions = "Required field";
        if (!formData.senderName) newErrors.senderName = "Required field";
        if (!formData.senderPhone) newErrors.senderPhone = "Required field";
        if (!formData.trackingNumber)
          newErrors.trackingNumber = "Required field";
        if (!formData.packageOrigin) newErrors.packageOrigin = "Required field";
        break;
      case "delivery-address":
        if (!formData.fullName) newErrors.fullName = "Required field";
        if (!formData.address) newErrors.address = "Required field";
        if (!formData.phone) newErrors.phone = "Required field";
        break;
      case "payment":
        if (!formData.paymentMethod)
          newErrors.paymentMethod = "Please select a payment method";
        break;
    }
    setErrors(newErrors);
    console.log("Validation Errors:", newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    const currentIndex = STEPS.findIndex((step) => step.id === currentStep);
    console.log("Current Step:", currentStep);
    console.log("Current Index:", currentIndex);

    if (validateStep()) {
      console.log("Validation passed");
      if (currentStep === "payment") {
        // Simulate order completion
        setOrderCompleted(true);
        console.log("Order completed");
        setCurrentStep(STEPS[0].id);
        // Reset other states
        setSelectedCompany(null);
        setFormData({
          packageType: "",
          dimensions: "",
          senderName: "",
          senderPhone: "",
          trackingNumber: "",
          packageOrigin: "",
          fullName: "",
          address: "",
          phone: "",
          paymentMethod: "",
        });
        setOrderCompleted(false);
      } else if (currentIndex < STEPS.length - 1) {
        setCurrentStep(STEPS[currentIndex + 1].id);
        console.log("Moving to next step:", STEPS[currentIndex + 1].id);
      }
    } else {
      console.log("Validation failed:", errors);
    }
  };

  const handleBack = () => {
    const currentIndex = STEPS.findIndex((step) => step.id === currentStep);
    if (currentIndex > 0) {
      setCurrentStep(STEPS[currentIndex - 1].id);
    }
  };

  return (
    <main className="w-full bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Transport Office Pickup</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose from our trusted transport partners to pick up and deliver
            your packages. Fast, reliable and secure delivery services across
            the city.
          </p>
        </header>

        <Stepper currentStep={currentStep} />

        {orderCompleted ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold">Order Placed Successfully!</h2>
            <p className="text-gray-600">You will be redirected to the homepage shortly.</p>
          </div>
        ) : (
          <>
            {currentStep === "company-select" && (
              <>
                <div className="relative mb-8">
                  <input
                    type="text"
                    placeholder="Search by company name or location..."
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFC244]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                </div>

                {loading ? (
                  <div className="text-center">Loading companies...</div>
                ) : error ? (
                  <div className="text-center text-red-500">Error: {error}</div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {companies.map((company, index) => (
                      <div
                        key={index}
                        className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border ${
                          selectedCompany === company
                            ? "border-[#FFC244]"
                            : "border-gray-100"
                        }`}
                        onClick={() => setSelectedCompany(company)}
                      >
                        <div className="mb-6">
                          <img
                            src={company.imageUrl}
                            alt={`${company.name} facility`}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                        </div>

                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-semibold">
                            {company.name}
                          </h3>
                          <Truck className="text-[#00A082]" size={24} />
                        </div>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-2">
                            <MapPin className="text-gray-400" size={18} />
                            <span className="text-gray-600">
                              {company.location}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Clock className="text-gray-400" size={18} />
                            <span className="text-gray-600">{company.hours}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Package className="text-gray-400" size={18} />
                            <span className="text-gray-600">
                              {company.goods.join(", ")}
                            </span>
                          </div>
                        </div>

                        <button
                          className={`w-full ${
                            selectedCompany === company
                              ? "bg-[#FFC244] hover:bg-[#ffb820]"
                              : "bg-gray-100 hover:bg-gray-200"
                          } text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2`}
                          onClick={() => {
                            setSelectedCompany(company);
                            handleNext();
                          }}
                        >
                          {selectedCompany === company
                            ? "Selected"
                            : "Select & Continue"}
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {currentStep === "package-details" && (
              <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm">
                <PackageDetailsForm
                  formData={formData}
                  setFormData={setFormData}
                  errors={errors}
                />
              </div>
            )}

            {currentStep === "delivery-address" && (
              <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm">
                <DeliveryAddressForm
                  formData={formData}
                  setFormData={setFormData}
                  errors={errors}
                />
              </div>
            )}

            {currentStep === "payment" && (
              <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm">
                <PaymentSection
                  formData={formData}
                  setFormData={setFormData}
                  errors={errors}
                />
              </div>
            )}

            {currentStep === "tracking" && (
              <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm">
                <TrackingView formData={formData} />
              </div>
            )}

            {currentStep !== "company-select" && currentStep !== "tracking" && (
              <div className="max-w-2xl mx-auto mt-6 flex justify-between">
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 hover:bg-gray-50"
                >
                  <ChevronLeft size={20} />
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FFC244] hover:bg-[#ffb820] text-black font-semibold"
                >
                  {currentStep === "payment" ? "Complete Order" : "Continue"}
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
