"use client";

import { createContext, useContext } from "react";
import { Socket } from "socket.io-client";

export type JoinMeetingType = {
  meetingId: string;
  userId: string;
};

export const MeetingContext = createContext({
  meetingData: null,
  socket: null as Socket | null,
  joinMeeting: (joinMeetingData: JoinMeetingType) => {},
  leaveMeeting: (userId: string) => {},
});

export const useMeetingContext = () => useContext(MeetingContext);
