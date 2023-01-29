export type VisioCardType = {
  id: number;
  name: string;
  image?: string | undefined;
  isTalking: boolean;
  microphoneActivated: boolean;
};

export const VISIOCARDS: VisioCardType[] = [
  {
    id: 1,
    name: "angelina jolie",
    image: "url",
    isTalking: false,
    microphoneActivated: false,
  },
  {
    id: 2,
    name: "john doe",
    image: "url",
    isTalking: false,
    microphoneActivated: false,
  },

  {
    id: 3,
    name: "Sarah Tralo",
    isTalking: false,
    microphoneActivated: false,
  },

  {
    id: 2,
    name: "yemi alade",
    image: "url",
    isTalking: true,
    microphoneActivated: true,
  },
];
