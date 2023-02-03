"use client";

import { NoteTranscription } from "./modules/note-transcription/note-transcription";
import { Talk } from "./modules/talk/talk";

export default function LifeMeeting() {
  return (
    <main className="items-end justify-end w-full min-h-screen px-3 py-8 md:py-4 sm:px-10 md:px-5 xl:px-28 md:h-screen md:space-x-3 lg:space-x-5 md:flex bg-primary">
      <Talk />;
      <NoteTranscription />
    </main>
  );
}
