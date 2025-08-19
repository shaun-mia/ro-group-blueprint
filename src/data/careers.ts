export interface JobOpening {
  id: string;
  title: string;
  company: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  deadline: string;
  description?: string;
  requirements?: string[];
  benefits?: string[];
}

export const jobOpenings: JobOpening[] = [
  {
    id: "ec-mgr-1",
    title: "E-commerce Manager",
    company: "RO Mart",
    department: "Operations",
    location: "Dhaka",
    type: "Full-time",
    experience: "3-5 years",
    deadline: "Dec 31, 2024"
  },
  // ...remaining job openings...
];

export const benefits = [
  "Competitive Compensation with performance-based reviews",
  "Two yearly festival bonuses",
  // ...remaining benefits...
];
