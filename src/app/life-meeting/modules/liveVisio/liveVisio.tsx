import { Header } from "./sections/header";
import { Visio } from "./sections/visio";
import { VisioConfig } from "./sections/visioConfig";

export const LifeVisio = () => {
  return (
    <section className="w-full">
      <Header />
      <Visio />
      <VisioConfig />
    </section>
  );
};
