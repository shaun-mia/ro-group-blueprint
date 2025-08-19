export interface TeamMember {
  name: string;
  position: string;
  description?: string;
  image?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Venture {
  id: string;
  name: string;
  slug: string;
  category: string;
  headline: string;
  about: string;
  icon: string;
  color: string;
  keyFacts: {
    established: string;
    location?: string;
    network?: string;
    annualSales?: string;
    teamSize: string;
    manufacturing?: string;
    showrooms?: string;
  };
  services?: Service[];
  team: TeamMember[];
}

export const ventures: Venture[] = [
  {
    id: "v1",
    name: "Rider's Option",
    slug: "riders-option",
    category: "Automotive",
    icon: "🏍️",
    color: "bg-blue-600",
    headline: "The Original Venture, Still Leading the Way",
    about: "Rider's Option is where it all began...",
    keyFacts: {
      established: "2017",
      location: "Moddho Badda, Dhaka",
      annualSales: "70-80 Lakh BDT",
      teamSize: "15+"
    },
    team: [
      {
        name: "KHALAD MAHMUD AUNTER",
        position: "Incharge Officer",
        description: "Leading operations and ensuring service excellence"
      },
      // ...existing team members...
    ]
  },
  {
    id: "v2",
    name: "RO Courier",
    slug: "ro-courier",
    category: "Logistics",
    icon: "📦",
    color: "bg-green-600",
    headline: "Reliable and Timely Delivery Services",
    about: "RO Courier ensures your parcels reach their destination on time.",
    keyFacts: {
      established: "2018",
      location: "Uttara, Dhaka",
      annualSales: "50-60 Lakh BDT",
      teamSize: "10+"
    },
    team: [
      {
        name: "John Doe",
        position: "Operations Manager",
        description: "Overseeing daily operations and logistics"
      },
      // ...existing team members...
    ]
  },
  // ...add other ventures
];
