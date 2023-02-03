import { constants } from "buffer";

export type VisioConfigIcon = {
  id: number;
  alt: string;
  image: string;
  position: "left" | "right";
};

export const ICON_POSITION_LEFT = "left";
export const ICON_POSITION_RIGHT = "right";

export const VISIO_CONFIG_ICON: VisioConfigIcon[] = [
  {
    id: 1,
    alt: "volume",
    image: "volume.svg",
    position: ICON_POSITION_LEFT,
  },

  {
    id: 2,
    alt: "video",
    image: "video.svg",
    position: ICON_POSITION_LEFT,
  },

  {
    id: 3,
    alt: "recording",
    image: "recording.svg",
    position: ICON_POSITION_LEFT,
  },
  {
    id: 4,
    alt: "ask to speak",
    image: "ask-to-speak.svg",
    position: ICON_POSITION_RIGHT,
  },

  {
    id: 5,
    alt: "setting",
    image: "settings.svg",
    position: ICON_POSITION_RIGHT,
  },

  {
    id: 6,
    alt: "profile",
    image: "profile.svg",
    position: ICON_POSITION_RIGHT,
  },
];
