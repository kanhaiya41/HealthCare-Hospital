// import { Doctor, Service } from '../types';

export const services = [
  {
    id: 1,
    name: "Cardiology",
    description: "Complete heart care services",
    symptoms: ["Chest pain", "Shortness of breath", "Irregular heartbeat"],
    opdTiming: "Mon, Wed, Fri: 9:00 AM - 2:00 PM"
  },
  {
    id: 2,
    name: "Neurology",
    description: "Brain and nervous system care",
    symptoms: ["Headache", "Dizziness", "Memory problems"],
    opdTiming: "Tue, Thu, Sat: 10:00 AM - 3:00 PM"
  },
  {
    id: 3,
    name: "Pediatrics",
    description: "Child healthcare services",
    symptoms: ["Fever", "Cough", "Cold"],
    opdTiming: "Mon to Sat: 9:00 AM - 5:00 PM"
  },
  {
    id: 4,
    name: "Orthopedics",
    description: "Bone and joint care specialists",
    symptoms: ["Joint pain", "Back pain", "Fractures"],
    opdTiming: "Mon, Wed, Fri: 2:00 PM - 7:00 PM"
  }
];

export const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiology",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300",
    experience: "15+ years",
    education: "MD (Cardiology), FRCP",
    awards: ["Best Cardiologist 2022", "Research Excellence Award"],
    publications: ["Modern Approaches in Cardiovascular Care", "Prevention of Heart Disease"],
    languages: ["English", "Spanish"],
    opdDays: "Monday, Wednesday, Friday",
    opdTiming: "9:00 AM - 2:00 PM"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "Neurology",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300",
    experience: "12+ years",
    education: "MD (Neurology), PhD",
    awards: ["Excellence in Neurological Research"],
    publications: ["Advanced Brain Mapping Techniques"],
    languages: ["English", "Mandarin"],
    opdDays: "Tuesday, Thursday, Saturday",
    opdTiming: "10:00 AM - 3:00 PM"
  },
  {
    id: 3,
    name: "Dr. Emily Williams",
    specialization: "Pediatrics",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300",
    experience: "10+ years",
    education: "MD (Pediatrics)",
    awards: ["Child Care Excellence Award"],
    publications: ["Modern Pediatric Care Guidelines"],
    languages: ["English", "French"],
    opdDays: "Monday to Saturday",
    opdTiming: "9:00 AM - 5:00 PM"
  },
  {
    id: 4,
    name: "Dr. James Anderson",
    specialization: "Orthopedics",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300",
    experience: "20+ years",
    education: "MD (Orthopedics), FRCS",
    awards: ["Surgical Excellence Award"],
    publications: ["Advanced Joint Replacement Techniques"],
    languages: ["English"],
    opdDays: "Monday, Wednesday, Friday",
    opdTiming: "2:00 PM - 7:00 PM"
  }
];

export const URL='http://localhost:6000/api'