export interface Venture {
  name: string;
  slug: string;
  category: string;
  established: string;
  headline: string;
  description: string;
  keyFacts: {
    location?: string;
    network?: string;
    manufacturing?: string;
    showrooms?: string;
    revenue: string;
    employees: string;
  };
  team: {
    name: string;
    position: string;
    description?: string;
  }[];
  services?: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const ventures: Venture[] = [
  {
    name: "Rider's Option",
    slug: "riders-option",
    category: "Automotive",
    established: "2017",
    headline: "The Original Venture, Still Leading the Way",
    description: "Premier bike servicing center and parcel service in Dhaka",
    keyFacts: {
      location: "Moddho Badda, Dhaka",
      revenue: "70-80 Lakh BDT",
      employees: "15+"
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
  // ...remaining ventures with their details...
];
