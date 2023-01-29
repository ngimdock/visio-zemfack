import { NoteTranscription } from "./modules/note-transcription/note-transcription";
import { Talk } from "./modules/talk/talk";

export const LifeMeetingBody = () => {
  return (
    <section className="justify-end w-full h-screen p-8 md:space-x-3 lg:space-x-5 md:flex bg-primary">
      <Talk />
      <NoteTranscription />
    </section>
  );
};
