import { Home } from "./sections/home";
import { Note } from "./sections/note";
import { Transcription } from "./sections/transcription";

export const NoteTranscription = () => {
  return (
    <aside className="p-2 mt-5 text-white rounded-md notes-transcription-container sm:mt-0 bg-black md:w-[260px] lg:w-72 shrink-0">
      <Home />
      <Note />
      <Transcription />
    </aside>
  );
};
