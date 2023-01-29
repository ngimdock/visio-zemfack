import { Header } from "./sections/header";
import { Visio } from "./sections/visio";
import { VisioConfig } from "./sections/visio-config";

export const Talk = () => {
  return (
    <main className="h-full col-span-9 bg-green-500">
      <Header />
      <Visio />
      <VisioConfig />
    </main>
  );
};
