export type VisioCardType = {
  id: number;
  name: string;
  image?: string;
  isTalking: boolean;
  microphoneActivated: boolean;
};

export const VISIOCARDS: VisioCardType[] = [
  {
    id: 1,
    name: "angelina jolie",
    image: "angeline-jolie.jpg",
    isTalking: false,
    microphoneActivated: false,
  },
  {
    id: 2,
    name: "john doe",
    image: "john-doe.jpg",
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
    id: 4,
    name: "yemi alade",
    image: "yemi-alade.jpg",
    isTalking: true,
    microphoneActivated: true,
  },

  {
    id: 5,
    name: "angelina jolie",
    image: "angeline-jolie.png",
    isTalking: false,
    microphoneActivated: false,
  },
];
