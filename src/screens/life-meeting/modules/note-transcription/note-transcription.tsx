import { Home } from "./sections/home";
import { Note } from "./sections/note";
import { Transcription } from "./sections/transcription";

export const NoteTranscription = () => {
  return (
    <aside className="w-full p-2 mt-5 text-white md:mt-0 md:w-72 bg-secondary lg:w-80 shrink-0">
      <Home />
      <Note />
      <Transcription />
    </aside>
  );
};
