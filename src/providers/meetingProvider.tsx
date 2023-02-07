"use client";

// import { MeetingContext } from "@/app/contexts";
import { createContext, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const MeetingContext = createContext({
  meetingData: null,
  joinMeeting: (meetingId: string, userId: string) => {},
  leaveMeeting: (userId: string) => {},
});

type MeetingProviderProps = {
  children: React.ReactNode;
};

export const MeetingContextProvider = ({ children }: MeetingProviderProps) => {
  const [meetingData, setMeetingData] = useState(null);

  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socket = io("http://localhost:5000");
    setSocket(socket);
  }, []);

  useEffect(() => {
    console.log({ socket });
  }, [socket]);

  function joinMeeting(meetingId: string, userId: string) {
    if (!socket) return;

    socket.emit("joinMeeting", meetingId, userId);
  }

  function leaveMeeting(userId: string) {}

  const contextValue = {
    meetingData,
    joinMeeting,
    leaveMeeting,
  };

  return (
    <MeetingContext.Provider value={{ meetingData, joinMeeting, leaveMeeting }}>
      {children}
    </MeetingContext.Provider>
  );
};

export const useMeetingContext = () => useContext(MeetingContext);
