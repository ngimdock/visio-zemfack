import { IconAsImage } from "@/components/icon-as-image/icon-as-image";
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
    <aside className="px-5 py-4 mt-5 text-white rounded-md notes-transcription-container sm:mt-0 custom-bg-shadow  md:w-[260px] lg:w-72 shrink-0">
      <div className="flex justify-end">
        <IconAsImage alt="next" image="arow.svg" iconSize="w-3.5" />
      </div>
      <div className="mt-2">
        <Tabs tabsData={TABS_DATA} />
      </div>
    </aside>
  );
};
