import { Header } from "./sections/header";
import { Visio } from "./sections/visio";
import { VisioConfig } from "./sections/visioConfig";

export const LifeVisio = () => {
  return (
    <main className="w-full md:h-full max-w-[690px] col-span-9">
      <Header />
      <Visio />
      <VisioConfig />
    </main>
  );
};
