import { Tab } from "@headlessui/react";
import clsx from "clsx";

export type Data = {
  id: number;
  headerTitle: string;
  body: any;
};

export type TabsData = {
  styleSelectedTab: string;
  styleHeadersTab: string;
  data: Data[];
};

export function Tabs({ tabsData }: { tabsData: TabsData }) {
  return (
    <Tab.Group>
      <Tab.List className="flex justify-between w-full">
        {tabsData.data.map((tabElt) => (
          <Tab key={tabElt.id}>
            {({ selected }) => (
              <button
                className={clsx(
                  tabsData.styleHeadersTab,
                  selected ? tabsData.styleSelectedTab : "",
                  "px-3 py-0.5"
                )}
              >
                <span>{tabElt.headerTitle}</span>
              </button>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {tabsData.data.map((tabsElt) => (
          <Tab.Panel key={tabsElt.id}>{tabsElt.body}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
