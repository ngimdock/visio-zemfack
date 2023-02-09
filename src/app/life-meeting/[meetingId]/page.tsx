"use client";

import { MEETINGS } from "@/mockDatas";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { LifeVisio } from "../modules/liveVisio/liveVisio";
import { NoteTranscription } from "../modules/noteTranscription/noteTranscription";
import { Peer } from "peerjs";
import { generateUUID } from "@/utils";
import { PEER_CONFIG, SERVER_IO_URL } from "@/config";
import { JOIN_MEETING, OPEN, USER_JOINED, USER_LEFT } from "@/lib";

type PageProps = {
  params: {
    meetingId: string;
  };
};

const fetchMeeting = (meetingId: string) =>
  MEETINGS.find((meeting) => meeting.id === meetingId);

export default function Meeting({ params: { meetingId } }: PageProps) {
  const currentMeetingData = fetchMeeting(meetingId);

  const [socket, setSocket] = useState<Socket>();
  const [peer, setPeer] = useState<Peer>();

  useEffect(() => {
    const socket = io(SERVER_IO_URL);
    setSocket(socket);

    const PeerToConnectId = generateUUID();
    const peer = new Peer(PeerToConnectId, PEER_CONFIG);

    setPeer(peer);
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on(USER_JOINED, (userId: string) => {
      console.log({ message: `User joined : ${userId}` });
    });

    socket.on(USER_LEFT, (userId: string) => {
      console.log({ message: `User left : ${userId}` });
    });

    if (!peer) return;

    peer.on(OPEN, (userId) => {
      console.log({ userId });
      console.log({ message: `Peer connected : ${userId}` });

      socket.emit(JOIN_MEETING, {
        meetingId,
        userId: userId,
      });
    });
  }, [socket, peer]);

  return (
    <main className="mx-auto items-center md:items-end md:justify-end w-full  max-w-[355px] xs:max-w-full  min-h-screen px-3 py-8 md:py-4 sm:px-10 md:px-5 xl:px-28 md:h-screen md:space-x-3 lg:space-x-5 flex flex-col md:flex-row">
      <LifeVisio />;
      <NoteTranscription />
    </main>
  );
}
