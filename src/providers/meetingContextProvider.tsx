"use client";

import { JoinMeetingType, MeetingContext } from "@/contexts/meetingContext";
import { MeetingSubscribers } from "@/enums/meeting-subscribers";

import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { useMeetingContext } from "./meetingProvider";

const BAKEND_HOST_URL = "http://localhost:8000";

export const MeetingContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [meetingData, setMeetingData] = useState(null);
  const [socket, setSocket] = useState<Socket | null>(null);

  // useEffect(() => {
  //   const socket = io(BAKEND_HOST_URL);
  //   setSocket(socket);
  // }, []);

  function joinMeeting(joinMeetingData: JoinMeetingType) {
    if (!socket) return;

    socket.emit(MeetingSubscribers.JoinMeeting, joinMeetingData);
  }

  function leaveMeeting(userId: string) {}

  const contextValue = {
    meetingData,
    socket,
    joinMeeting,
    leaveMeeting,
  };

  return (
    <MeetingContext.Provider value={contextValue}>
      {children}
    </MeetingContext.Provider>
  );
};
