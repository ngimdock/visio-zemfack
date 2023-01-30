import { IconAsImage } from "@/components/icon-as-image/icon-as-image";
import { VISIOCARDS, VisioCardType } from "@/data/visio-cards";
import { getFirstTwoLetters } from "@/utils";
import clsx from "clsx";

const START_AT_FIST_USER = 0;
const NUMBER_USERS_TO_DISPLAY_IN_VISIO = 4;

export const Visio = () => {
  return (
    <section className="mt-4 md:mt-1.5 text-2xl">
      <div className="grid sm:grid-cols-2 sm:grid-rows-2 lg:gap-x-8 gap-4  xl:gap-x-7  xl:gap-y-4 sm:h-[390px]">
        {VISIOCARDS.slice(
          START_AT_FIST_USER,
          NUMBER_USERS_TO_DISPLAY_IN_VISIO
        ).map((visioCard) => (
          <VisioCard cardData={visioCard} key={visioCard.id} />
        ))}
      </div>

      <div className="mt-10 md:mt-4">
        <div className="flex items-center justify-between font-Inter">
          <div className="flex items-center px-2 py-0 space-x-1 border rounded border-custom-pink text-custom-pink">
            <span className="w-1 h-1 text-xl rounded bg-custom-pink"></span>
            <span className="text-xx">Recording</span>
          </div>
          <span className="block text-xx text-custom-white">17 : 04</span>
        </div>

        <span className="h-0.5 mt-1 w-full block rounded bg-gradient-to-r from-custom-bleu to-custom-yelow "></span>
      </div>
    </section>
  );
};

type VisioCardPros = {
  cardData: VisioCardType;
};

const VisioCard = ({ cardData }: VisioCardPros) => {
  return (
    <article
      className={clsx(
        "h-40 hover:cursor-pointer bg-center bg-cover rounded-3xl sm:h-auto flex justify-center items-center relative",
        !cardData.image && "custom-bg-shadow",
        cardData.isTalking && "visio-card-person-speaking"
      )}
      style={{ backgroundImage: `url(/assets/images/${cardData.image})` }}
    >
      {!cardData.image && (
        <>
          <div className="flex items-center justify-center w-16 h-16 p-5 border-2 rounded-full border-custom-yelow text-custom-yelow md:h-20 md:w-20">
            <span className="block text-xl uppercase font-Inter">
              {getFirstTwoLetters(cardData.name)}
            </span>
          </div>
          <p className="absolute text-xx text-custom-yelow bottom-4 right-6 font-Inter">
            {cardData.name} - 22%
          </p>
        </>
      )}

      <IconAsImage
        image={cardData.isTalking ? "speak.svg" : "no-speak.svg"}
        alt={
          cardData.isTalking ? cardData.name + " is talking" : "is not talking"
        }
        classe="w-4 absolute top-3 left-5 "
      />
    </article>
  );
};
