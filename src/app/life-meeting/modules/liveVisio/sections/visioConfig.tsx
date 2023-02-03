import { IconAsImage } from "@/components/iconAsImage/iconAsImage";

import {
  ICON_POSITION_LEFT,
  ICON_POSITION_RIGHT,
  VisioConfigIcon,
  VISIO_CONFIG_ICON,
} from "@/mockDatas/visioConfigIcons";

export const VisioConfig = () => {
  return (
    <section className="flex justify-center mt-14 md:mt-8">
      <div className="relative flex justify-between w-full max-w-sm px-5 py-6 rounded-lg xs:py-4 custom-bg-shadow sm:px-8 sm:w-3/5 md:w-4/5 lg:w-3/5">
        <IconContainer
          icons={VISIO_CONFIG_ICON.filter(
            (icon) => icon.position === ICON_POSITION_LEFT
          )}
        />
        <IconContainer
          icons={VISIO_CONFIG_ICON.filter(
            (icon) => icon.position === ICON_POSITION_RIGHT
          )}
        />

        <div className="custom-bg-shadow w-9 h-9 cursor-pointer group absolute -top-4 translate-x-[-50%] rounded-full flex justify-center items-center p-2 left-[50%]">
          <IconAsImage
            image="pause.svg"
            alt="pause"
            title="pause"
            iconSize="w-3"
          />
        </div>
      </div>
    </section>
  );
};

function IconContainer({ icons }: { icons: VisioConfigIcon[] }) {
  return (
    <div className="flex items-center space-x-5 xs:space-x-6 md:space-x-7">
      {icons.map((icon) => (
        <IconAsImage
          key={icon.id}
          image={icon.image}
          alt={icon.alt}
          title={icon.alt}
        />
      ))}
    </div>
  );
}
