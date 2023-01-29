import { NoteTranscription } from "./modules/note-transcription/note-transcription";
import { Talk } from "./modules/talk/talk";

export const LifeMeetingBody = () => {
  return (
    <section className="grid w-full h-screen grid-cols-12 p-8 gap-x-6 bg-primary">
      <Talk />
      <NoteTranscription />
    </section>
  );
};
