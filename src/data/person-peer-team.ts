export type Person = {
  id: number;
  name: string;
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
      },
      {
        id: 2,
        name: "Rachel",
      },
    ],
  },

  {
    teamName: "Solo",
    teamMembers: [
      {
        id: 1,
        name: "Sarah Tralo",
      },

      {
        id: 2,
        name: "Juliette Donovant",
      },
    ],
  },
];
