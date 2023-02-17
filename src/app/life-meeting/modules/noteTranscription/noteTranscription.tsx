import { IconAsImage } from "@/components/iconAsImage/iconAsImage";
import { Tabs, TabsData } from "@/components/tabs/tabs";
import { Home } from "./sections/home";
import { Note } from "./sections/note";
import { Transcription } from "./sections/transcription";

export const NoteTranscription = () => {
  const TABS_DATA: TabsData = {
    styleHeadersTab: "text-xx text-custom-white",
    styleSelectedTab: "border-b-2 border-custom-indigo",
    data: [
      {
        id: 1,
        headerTitle: "home",
        body: <Home />,
      },

      {
        id: 2,
        headerTitle: "Notes",
        body: <Note />,
      },

      {
        id: 3,
        headerTitle: "Transcript",
        body: <Transcription />,
      },
    ],
  };
  return (
    <aside className="relative w-full px-5 py-5 mt-6 text-white rounded-md md:py-4 notes-transcription-container md:mt-0 custom-bg-shadow lg:w-72 shrink-0 xs:w-96 md:w-64">
      <div className="flex justify-end">
        <IconAsImage alt="next" image="arow.svg" iconSize="w-3.5" />
      </div>
      <div className="relative h-full mt-3 md:mt-2">
        <Tabs tabsData={TABS_DATA} />
      </div>
    </aside>
  );
};
