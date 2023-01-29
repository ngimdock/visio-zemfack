import { VISIOCARDS, VisioCardType } from "@/data/visio-cards";

export const Visio = () => {
  return (
    <section className="mt-1.5 text-2xl">
      <div className="grid sm:grid-cols-2 sm:grid-rows-2 lg:gap-x-8 gap-4  xl:gap-x-7  xl:gap-y-4 sm:h-[390px]">
        {VISIOCARDS.slice(0, 4).map((visioCard) => (
          <VisioCard cardData={visioCard} key={visioCard.id} />
        ))}
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center justify-center py-0 border rounded border-custom-pink text-custom-pink">
          <span className="w-5">.</span>
          <span className="text-xs">Recording</span>
        </div>
        <span className="text-xs text-white">13:14</span>
      </div>
    </section>
  );
};

type VisioVardPros = {
  cardData: VisioCardType;
};

const VisioCard = ({ cardData }: VisioVardPros) => {
  return (
    <article
      className="h-40 bg-indigo-700 rounded-3xl sm:h-auto"
      style={{ backgroundImage: `url(/assets/images/${cardData.image})` }}
    >
      <div className="p-5 borser-2 border-custom-yelow text-custom-yelow ">
        <span className="text-xl ">ST</span>
      </div>

      <p className="text-xs">{cardData.name} - 20%</p>
    </article>
  );
};
