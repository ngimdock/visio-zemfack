import { H2 } from "@/components/heading/h2";
import { P } from "@/components/p/p";
import { HEADER_ICONS, IconType } from "@/data/header-icons";
import clsx from "clsx";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex items-center justify-between text-lg text-white md:pl-3">
      <div className="flex items-end space-x-2">
        <H2>Daily Team Azure</H2>
        <P size="xs" classe="mb-1 hidden sm:block">
          10th November, 2023
        </P>
      </div>

      <div className="flex items-center space-x-2">
        {HEADER_ICONS.map((icon: IconType) => (
          <Image
            key={icon.id}
            src={`/assets/svg/${icon.image}`}
            className={clsx(
              "w-3 ",
              "hover:cursor-pointer hover:opacity-80 animate"
            )}
            width={15}
            height={15}
            alt="test"
          />
        ))}
      </div>
    </header>
  );
};
