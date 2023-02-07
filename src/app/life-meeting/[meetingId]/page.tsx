"use client";

import { useMeetingContext } from "@/contexts/meetingContext";
import { MeetingSubscribers } from "@/enums/meeting-subscribers";
import { MEETINGS } from "@/mockDatas";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { LifeVisio } from "../modules/liveVisio/liveVisio";
import { NoteTranscription } from "../modules/noteTranscription/noteTranscription";

type PageProps = {
  params: {
    meetingId: string;
  };
};

const fetchMeeting = (meetingId: string) =>
  MEETINGS.find((meeting) => meeting.id === meetingId);

export default function Meeting({ params: { meetingId } }: PageProps) {
  const currentMeetingData = fetchMeeting(meetingId);
  const USER_ID = "10";

  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    const socket = io("http://localhost:5001");
    setSocket(socket);
  }, []);

  useEffect(() => {
    console.log({ socket });
  }, [socket]);

  const { joinMeeting } = useMeetingContext();

  useEffect(() => {
    if (!socket) return;

    socket.emit(MeetingSubscribers.JoinMeeting, {
      meetingId,
      userId: USER_ID,
    });

    socket.on(MeetingSubscribers.UserJoined, (userId: string) => {
      console.log({ message: `User joined : ${userId}` });
    });

    socket.on(MeetingSubscribers.UserLeft, (userId: string) => {
      console.log({ message: `User left : ${userId}` });
    });

    return () => {
      socket?.emit("leave-meeting", { userId: USER_ID });
    };
  }, [socket]);

  return (
    <main className="mx-auto items-center md:items-end md:justify-end w-full  max-w-[355px] xs:max-w-full  min-h-screen px-3 py-8 md:py-4 sm:px-10 md:px-5 xl:px-28 md:h-screen md:space-x-3 lg:space-x-5 flex flex-col md:flex-row">
      <LifeVisio />;
      <NoteTranscription />
    </main>
  );
}
