import { Department, TimeSlot, Sport } from './types';

export const DEPARTMENTS: Department[] = [
  Department.MCA,
  Department.MBA,
  Department.BCA,
  Department.BBA,
  Department.BCom,
  Department.MCom
];

export const TIME_SLOTS: TimeSlot[] = [
  "09:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 01:00 PM",
  "01:00 PM - 02:00 PM",
  "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM",
  "04:00 PM - 05:00 PM",
];

export const DEFAULT_SPORTS: Sport[] = [
  {
    id: 'cricket',
    name: 'Cricket',
    imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.zKjKp5uFvyUl-6R6LJCNlwHaEK?pid=Api&P=0&h=180',
  },
  {
    id: 'football',
    name: 'Football',
    imageUrl: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'badminton',
    name: 'Badminton',
    imageUrl: 'http://sportlines.com.ph/cdn/shop/collections/boy-playing-badminton-isolated-white-wall.jpg?v=1679105956',
  },
  {
    id: 'basketball',
    name: 'Basketball',
    imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.A0JsU0BqlbI0BbZaNqj7RAHaEK?pid=Api&P=0&h=180',
  },
  {
    id: 'volleyball',
    name: 'Volleyball',
    imageUrl: 'https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0131%2Fr1124824_1296x729_16-9.jpg',
  },
  {
    id: 'table-tennis',
    name: 'Table Tennis',
    imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.jizH4DGOGDTLeT96dgE8JwHaEK?pid=Api&P=0&h=180',
  },
];