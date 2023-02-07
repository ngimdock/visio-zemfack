export type MeetingType = {
  id: string;
  startDate: string;
  endDate: string;
  title: string;
  description: string;
  members?: string[];
};

export const MEETINGS: MeetingType[] = [
  {
    id: "1",
    startDate: "2021-05-01T10:00:00",
    endDate: "2021-05-01T11:00:00",
    title: "Learn React",
    description: "All all you need to know about React",
  },

  {
    id: "2",
    startDate: "2021-05-01T11:00:00",
    endDate: "2021-05-01T12:00:00",
    title: "Learn Nestjs",
    description: "All all you need to know about Nestjs",
  },

  {
    id: "3",
    startDate: "2021-05-01T12:00:00",
    endDate: "2021-05-01T13:00:00",
    title: "Learn Typescript",
    description: "All all you need to know about Typescript",
  },

  {
    id: "4",
    startDate: "2021-05-01T13:00:00",
    endDate: "2021-05-01T14:00:00",
    title: "Learn Next13",
    description: "All all you need to know about Next13",
  },

  {
    id: "5",
    startDate: "2021-05-01T14:00:00",
    endDate: "2021-05-01T15:00:00",
    title: "Learn Socket.io",
    description: "All all you need to know about Socket.io",
  },
];
