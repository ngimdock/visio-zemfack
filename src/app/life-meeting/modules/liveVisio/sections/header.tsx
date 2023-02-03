import { H2 } from "@/components/heading/h2";
import { IconAsImage } from "@/components/icon-as-image/icon-as-image";
import { P } from "@/components/p/p";
import { HEADER_ICONS, IconType } from "@/mockDatas/header-icons";

export const Header = () => {
  return (
    <header className="flex items-center justify-between text-lg text-white md:pl-3">
      <div className="flex items-end space-x-2">
        <H2>Daily Team Azure</H2>
        <P classe="mb-1 hidden sm:block">10th November, 2023</P>
      </div>

      <div className="flex items-center space-x-2">
        {HEADER_ICONS.map((icon: IconType) => (
          <IconAsImage
            key={icon.id}
            image={icon.image}
            alt={icon.alt}
            title={icon.alt}
            iconSize="w-2.5"
          />
        ))}
      </div>
    </header>
  );
};
