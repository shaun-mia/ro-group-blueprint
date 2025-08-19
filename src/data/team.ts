export interface TeamMember {
  name: string;
  position: string;
  description?: string;
  photo?: string;
  venture: string;
}

export const corporateTeam: TeamMember[] = [
  {
    name: "Rafid Ahsan Noor",
    position: "Chairman",
    description: "Strategic visionary behind RO Group",
    venture: "corporate"
  },
  {
    name: "Akbar Hossain Bappy",
    position: "Managing Director",
    description: "Operational leader ensuring excellence",
    venture: "corporate"
  },
  {
    name: "Monty Dey",
    position: "Head of HR",
    venture: "corporate"
  },
  {
    name: "AMIRUL ISLAM NUR FAHAD",
    position: "Administrative Officer",
    venture: "corporate"
  },
  {
    name: "Umma Habiba Shathi",
    position: "Admin & HR",
    venture: "corporate"
  }
];
