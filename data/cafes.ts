import { Cafe } from '@/types/cafe';

export const cafes: Cafe[] = [
  {
    id: '1',
    name: 'St. Oberholz',
    city: 'Berlin',
    address: 'Rosenthaler Str. 72a, 10119 Berlin',
    description: 'A Berlin institution known for its laptop-friendly environment and creative atmosphere. Spread across two floors with plenty of workspace.',
    imageUrl: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    features: ['Free WiFi', 'Multiple Power Outlets', 'Meeting Rooms', 'Coffee', 'Food'],
    wifiSpeed: '100+ Mbps',
    powerOutlets: 'Abundant',
    noiseLevel: 'Moderate',
    openingHours: {
      'Monday-Friday': '8:00 - 22:00',
      'Saturday-Sunday': '9:00 - 22:00'
    },
    rating: 4.5
  },
  {
    id: '2',
    name: 'Coffee Fellows',
    city: 'Munich',
    address: 'Schwabing-West, 80796 München',
    description: 'Modern cafe chain with excellent workspace setup and professional atmosphere. Popular among remote workers and students.',
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    features: ['High-Speed WiFi', 'Power Outlets', 'Meeting Areas', 'Premium Coffee', 'Breakfast'],
    wifiSpeed: '200+ Mbps',
    powerOutlets: 'Every Table',
    noiseLevel: 'Low',
    openingHours: {
      'Monday-Friday': '7:30 - 20:00',
      'Saturday': '8:00 - 20:00',
      'Sunday': '9:00 - 19:00'
    },
    rating: 4.3
  },
  {
    id: '3',
    name: 'Cafe Extrablatt',
    city: 'Hamburg',
    address: 'Neuer Wall 13, 20354 Hamburg',
    description: 'Spacious cafe with a mix of casual and work-friendly areas. Known for its excellent breakfast and lunch options.',
    imageUrl: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    features: ['WiFi', 'Power Outlets', 'Large Tables', 'Full Menu', 'Outdoor Seating'],
    wifiSpeed: '50+ Mbps',
    powerOutlets: 'Good Availability',
    noiseLevel: 'Moderate',
    openingHours: {
      'Monday-Friday': '8:00 - 23:00',
      'Saturday-Sunday': '9:00 - 23:00'
    },
    rating: 4.2
  }
];