import { Header } from "./sections/header";
import { Visio } from "./sections/visio";
import { VisioConfig } from "./sections/visio-config";

export const Talk = () => {
  return (
    <main className="w-full md:h-full max-w-[690px] col-span-9">
      <Header />
      <Visio />
      <VisioConfig />
    </main>
  );
};
