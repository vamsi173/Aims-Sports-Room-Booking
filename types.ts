export enum Department {
  MCA = 'MCA',
  MBA = 'MBA',
  BBA = 'BBA',
  BCA = 'BCA',
  BCom = 'B.Com',
  MCom = 'M.Com'
}

export type TimeSlot = string;

export interface Sport {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Booking {
  id: string;
  date: string; // YYYY-MM-DD format
  timeSlot: TimeSlot;
  department: Department;
  bookedBy: string;
  sport: string; // The name of the sport
}

export type NotificationType = 'success' | 'error';

export interface Notification {
  id: number;
  message: string;
  type: NotificationType;
}

export interface User {
  name: string;
  department: Department;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot' | 'system';
  metadata?: any;
}
