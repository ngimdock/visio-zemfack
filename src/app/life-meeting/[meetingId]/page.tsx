"use client";

import { MEETINGS } from "@/mockDatas";
import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import { LifeVisio } from "../modules/liveVisio/liveVisio";
import { NoteTranscription } from "../modules/noteTranscription/noteTranscription";
import { Peer } from "peerjs";
import { createVideoElement, generateUUID } from "@/utils";
import { PEER_CONFIG, SERVER_IO_URL } from "@/config";
import {
  CALL,
  CLOSE,
  JOIN_MEETING,
  OPEN,
  STREAM,
  USER_JOINED,
  USER_LEFT,
} from "@/lib";
import { VISIO_GRID } from "../modules/liveVisio/sections/visio";
import { useToastContext } from "@/contexts/toastContext";
import { Toast } from "@/components/toast/toast";

type PageProps = {
  params: {
    meetingId: string;
  };
};

type VisioTagsRefType = {
  visioGrid: HTMLElement | null;
  myVideo: HTMLVideoElement;
};

const fetchMeeting = (meetingId: string) =>
  MEETINGS.find((meeting) => meeting.id === meetingId);

export default function Meeting({ params: { meetingId } }: PageProps) {
  const currentMeetingData = fetchMeeting(meetingId);

  const [socket, setSocket] = useState<Socket>();
  const [peer, setPeer] = useState<Peer>();

  const vsioTagsRef = useRef<VisioTagsRefType>();

  const { isOpen: toastIsOpen, message, displayToast } = useToastContext();

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
      displayToast("one user join meeting");
    });

    socket.on(USER_LEFT, (userId: string) => {
      displayToast("one user left meeting");
    });

    if (!peer) return;

    peer.on(OPEN, (userId) => {
      socket.emit(JOIN_MEETING, {
        meetingId,
        userId: userId,
      });
    });
  }, [socket, peer]);

  useEffect(() => {
    const visioGrid = document.getElementById(VISIO_GRID);
    const myVideo = createVideoElement();
    myVideo.muted = true;

    vsioTagsRef.current = { visioGrid, myVideo };

    if (!navigator || !navigator.mediaDevices) return;

    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        if (!peer || !socket) return;

        addVideoStream(myVideo, stream);

        peer.on(CALL, function (incommingCall) {
          incommingCall.answer(stream);

          const video = createVideoElement();

          incommingCall.on(STREAM, function (userVideoStream) {
            addVideoStream(video, userVideoStream);
          });
        });

        socket.on(USER_JOINED, (userId) => {
          connectToNewUser(userId, stream);
        });
      });
  }, [peer, socket]);

  function connectToNewUser(userId: string, stream: MediaStream) {
    if (!peer) return;

    const call = peer.call(userId, stream);

    const video = createVideoElement();

    call.on(STREAM, (userVideoStream) => {
      addVideoStream(video, userVideoStream);
    });

    call.on(CLOSE, () => {
      video.remove();
    });
  }

  function addVideoStream(video: HTMLVideoElement, stream: any) {
    video.srcObject = stream;
    video.addEventListener("loadedmetadata", () => {
      video.play();
    });

    vsioTagsRef.current?.visioGrid?.append(video);
  }

  return (
    <main className="relative w-full h-screen px-4 py-4 ">
      <div className="md:absolute md:p-3 xl:p-0 mx-auto max-w-[355px] xs:max-w-full md:max-w-6xl md:space-x-3 xl:space-x-5 flex flex-col items-center md:items-stretch md:flex-row  w-full md:max-h-[800px] md:left-[50%] md:top-[50%] md:translate-y-[-50%] md:translate-x-[-50%]">
        <LifeVisio />;
        <NoteTranscription />
      </div>
      {toastIsOpen && <Toast message={message} />}
    </main>
  );
}
