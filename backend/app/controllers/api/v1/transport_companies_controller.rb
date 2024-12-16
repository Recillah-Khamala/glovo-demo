class Api::V1::TransportCompaniesController < ApplicationController
  def index
    companies = [
      {
        name: "Express Transport Co.",
        location: "Downtown Financial District",
        hours: "8:00 AM - 8:00 PM",
        goods: ["Documents", "Parcels", "Electronics"],
        imageUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "City Logistics",
        location: "Central Business Hub",
        hours: "24/7 Service",
        goods: ["Heavy Packages", "Furniture", "Commercial Goods"],
        imageUrl: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Swift Delivery",
        location: "Shopping District",
        hours: "9:00 AM - 10:00 PM",
        goods: ["Retail Items", "Food", "Documents"],
        imageUrl: "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      }
      
    ]
    
    render json: { companies: companies }
  end
end 