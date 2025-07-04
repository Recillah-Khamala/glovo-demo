import type { TransportCompany, Location, Package } from '../types';

// Realistic Kenyan transport companies
export const transportCompanies: TransportCompany[] = [
  {
    id: '1',
    name: 'Kenya Airways Cargo',
    address: 'Jomo Kenyatta International Airport, Nairobi',
    latitude: -1.3191,
    longitude: 36.9277,
    phone: '+254 20 327 4747',
    email: 'cargo@kenya-airways.com',
  },
  {
    id: '2',
    name: 'Safaricom M-Pesa Shop',
    address: 'Safaricom House, Westlands, Nairobi',
    latitude: -1.2657,
    longitude: 36.8156,
    phone: '+254 722 002 100',
    email: 'support@safaricom.co.ke',
  },
  {
    id: '3',
    name: 'DHL Express Kenya',
    address: 'DHL House, Mombasa Road, Nairobi',
    latitude: -1.3187,
    longitude: 36.8172,
    phone: '+254 20 690 0000',
    email: 'info@dhl.co.ke',
  },
  {
    id: '4',
    name: 'FedEx Kenya',
    address: 'FedEx Office, Upperhill, Nairobi',
    latitude: -1.2921,
    longitude: 36.8219,
    phone: '+254 20 271 0000',
    email: 'customer.service@fedex.com',
  },
  {
    id: '5',
    name: 'Aramex Kenya',
    address: 'Aramex House, Industrial Area, Nairobi',
    latitude: -1.3187,
    longitude: 36.8172,
    phone: '+254 20 690 0000',
    email: 'nairobi@aramex.com',
  },
  {
    id: '6',
    name: 'Posta Kenya',
    address: 'Posta House, Haile Selassie Avenue, Nairobi',
    latitude: -1.2833,
    longitude: 36.8172,
    phone: '+254 20 222 0000',
    email: 'info@posta.co.ke',
  },
  {
    id: '7',
    name: 'Mombasa Port Authority',
    address: 'Port of Mombasa, Mombasa',
    latitude: -4.0435,
    longitude: 39.6682,
    phone: '+254 41 231 0000',
    email: 'info@kpa.co.ke',
  },
  {
    id: '8',
    name: 'Kisumu Port',
    address: 'Port of Kisumu, Kisumu',
    latitude: -0.1022,
    longitude: 34.7617,
    phone: '+254 57 202 0000',
    email: 'info@kisumuport.co.ke',
  },
];

// Popular locations in Kenya
export const popularLocations: Location[] = [
  {
    id: 'nairobi-cbd',
    address: 'Nairobi Central Business District',
    latitude: -1.2921,
    longitude: 36.8219,
    zone: 'Nairobi Central',
  },
  {
    id: 'westlands',
    address: 'Westlands, Nairobi',
    latitude: -1.2657,
    longitude: 36.8156,
    zone: 'Nairobi West',
  },
  {
    id: 'karen',
    address: 'Karen, Nairobi',
    latitude: -1.3187,
    longitude: 36.7172,
    zone: 'Nairobi South',
  },
  {
    id: 'mombasa-old-town',
    address: 'Mombasa Old Town',
    latitude: -4.0435,
    longitude: 39.6682,
    zone: 'Mombasa Central',
  },
  {
    id: 'nyali',
    address: 'Nyali, Mombasa',
    latitude: -4.0435,
    longitude: 39.6682,
    zone: 'Mombasa North',
  },
  {
    id: 'kisumu-cbd',
    address: 'Kisumu Central Business District',
    latitude: -0.1022,
    longitude: 34.7617,
    zone: 'Kisumu Central',
  },
  {
    id: 'nakuru-cbd',
    address: 'Nakuru Central Business District',
    latitude: -0.3031,
    longitude: 36.0800,
    zone: 'Nakuru Central',
  },
  {
    id: 'eldoret-cbd',
    address: 'Eldoret Central Business District',
    latitude: 0.5204,
    longitude: 35.2694,
    zone: 'Eldoret Central',
  },
];

// Package types with realistic descriptions
export const packageTypes: Package[] = [
  {
    id: 'documents',
    type: 'document',
    description: 'Documents, letters, certificates, passports',
    weight: 0.5,
    dimensions: {
      length: 30,
      width: 21,
      height: 1,
    },
  },
  {
    id: 'small-parcel',
    type: 'small',
    description: 'Small packages, books, electronics, clothing',
    weight: 2,
    dimensions: {
      length: 40,
      width: 30,
      height: 20,
    },
  },
  {
    id: 'large-item',
    type: 'large',
    description: 'Large items, appliances, furniture parts',
    weight: 15,
    dimensions: {
      length: 80,
      width: 60,
      height: 50,
    },
  },
  {
    id: 'fragile',
    type: 'fragile',
    description: 'Fragile items, glass, ceramics, electronics',
    weight: 5,
    dimensions: {
      length: 50,
      width: 40,
      height: 30,
    },
    specialHandling: ['Handle with care', 'Keep upright', 'No stacking'],
  },
];

// Pricing zones for different areas
export const pricingZones = [
  {
    id: 'nairobi-central',
    name: 'Nairobi Central',
    basePrice: 200,
    distanceMultiplier: 50,
  },
  {
    id: 'nairobi-west',
    name: 'Nairobi West',
    basePrice: 250,
    distanceMultiplier: 60,
  },
  {
    id: 'nairobi-south',
    name: 'Nairobi South',
    basePrice: 300,
    distanceMultiplier: 70,
  },
  {
    id: 'mombasa-central',
    name: 'Mombasa Central',
    basePrice: 150,
    distanceMultiplier: 50,
  },
  {
    id: 'mombasa-north',
    name: 'Mombasa North',
    basePrice: 200,
    distanceMultiplier: 60,
  },
  {
    id: 'kisumu-central',
    name: 'Kisumu Central',
    basePrice: 180,
    distanceMultiplier: 55,
  },
  {
    id: 'nakuru-central',
    name: 'Nakuru Central',
    basePrice: 160,
    distanceMultiplier: 45,
  },
  {
    id: 'eldoret-central',
    name: 'Eldoret Central',
    basePrice: 170,
    distanceMultiplier: 50,
  },
]; 