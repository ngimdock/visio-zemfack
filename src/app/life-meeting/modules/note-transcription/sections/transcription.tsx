import { Badge } from "@/components/badge/badge";
import { Input } from "@/components/form/input";
import { P } from "@/components/p/p";

export const Transcription = () => {
  return (
    <section>
      <Input type="text" icon="search.svg" placeholder="Search..." />

      <div className="mt-6 md:mt-4">
        {[1, 2, 3].map((elt: number, index: number) => {
          return (
            <div
              key={index}
              className="mt-4 space-y-5 md:mt-2.5 md:space-y-3.5"
            >
              <div>
                <Badge background="pink" classe="float-left mr-2">
                  Tachel
                </Badge>
                <P color="custom-white" classe="max-w-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  quibusdam porro minima incidunt sit, reiciendis odio quas
                  dolore
                </P>
              </div>

              <div>
                <Badge background="bleu" classe="float-left mr-2">
                  Paul Alexis Dray
                </Badge>
                <P color="custom-white" classe="max-w-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  quibusdam porro minima incidunt sit, reiciendis odio quas
                  dolore
                </P>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
