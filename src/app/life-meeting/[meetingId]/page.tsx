"use client";

import { H2 } from "@/components/heading/h2";
import { LifeVisio } from "../modules/liveVisio/liveVisio";
import { NoteTranscription } from "../modules/noteTranscription/noteTranscription";

type PageProps = {
  params: {
    meetingId: string;
  };
};

export default function Meeting({ params }: PageProps) {
  const { meetingId } = params;

  console.log({ meetingId });

  return (
    <main className="mx-auto items-center md:items-end md:justify-end w-full  max-w-[355px] xs:max-w-full  min-h-screen px-3 py-8 md:py-4 sm:px-10 md:px-5 xl:px-28 md:h-screen md:space-x-3 lg:space-x-5 flex flex-col md:flex-row">
      <LifeVisio />;
      <NoteTranscription />
    </main>
  );
}
