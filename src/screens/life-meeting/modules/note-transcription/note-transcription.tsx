import { Home } from "./sections/home";
import { Note } from "./sections/note";
import { Transcription } from "./sections/transcription";

export const NoteTranscription = () => {
  return (
    <aside className="col-span-3 p-2 text-white bg-secondary">
      <Home />
      <Note />
      <Transcription />
    </aside>
  );
};
