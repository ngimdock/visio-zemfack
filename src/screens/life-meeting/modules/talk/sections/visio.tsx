import { VISIOCARDS, VisioCardType } from "@/data/visio-cards";
import clsx from "clsx";
import Image from "next/image";

const VISIO_NUMBER_USERS_TO_DISPLAY = 4;

export const Visio = () => {
  return (
    <section className="mt-1.5 text-2xl">
      <div className="grid sm:grid-cols-2 sm:grid-rows-2 lg:gap-x-8 gap-4  xl:gap-x-7  xl:gap-y-4 sm:h-[390px]">
        {VISIOCARDS.slice(0, VISIO_NUMBER_USERS_TO_DISPLAY).map((visioCard) => (
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
      className={clsx(
        "h-40 bg-center bg-cover rounded-3xl sm:h-auto flex justify-center items-center relative",
        !cardData.image && "custom-bg-shadow",
        cardData.isTalking && "visio-card-person-speaking"
      )}
      style={{ backgroundImage: `url(/assets/images/${cardData.image})` }}
    >
      {!cardData.image && (
        <>
          <div className="p-5 border-2 border-custom-yelow text-custom-yelow h-16  md:h-20 flex justify-center items-center w-16 md:w-20 rounded-full">
            <span className="text-xl block font-Inter uppercase">ST</span>
          </div>
          <p className="text-xs text-custom-yelow absolute bottom-4 right-6 font-Inter">
            {cardData.name} - 22%
          </p>
        </>
      )}
      <Image
        src={
          cardData.isTalking
            ? "/assets/svg/speak.svg"
            : "/assets/svg/no-speak.svg"
        }
        className={clsx("w-4 absolute top-3 left-5 ")}
        width={15}
        height={15}
        alt={
          cardData.isTalking ? cardData.name + " is talking" : "is not talking"
        }
      />
    </article>
  );
};
