export type Person = {
  id: number;
  name: string;
  color: "blue" | "pink" | "yelow" | "indigo";
};

export type PersonPeerTeamType = {
  teamName: string;
  teamMembers: Person[];
};

export const PERSON_PEER_TEAM: PersonPeerTeamType[] = [
  {
    teamName: "Paris Office",
    teamMembers: [
      {
        id: 1,
        name: "Paul Alexis Dray",
        color: "indigo",
      },
      {
        id: 2,
        name: "Rachel",
        color: "pink",
      },
    ],
  },

  {
    teamName: "Solo",
    teamMembers: [
      {
        id: 1,
        name: "Sarah Tralo",
        color: "yelow",
      },

      {
        id: 2,
        name: "Juliette Donovant",
        color: "blue",
      },
    ],
  },
];
