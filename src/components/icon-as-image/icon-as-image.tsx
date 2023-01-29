import clsx from "clsx";
import Image from "next/image";

type IconAsImageProps = {
  image: string;
  alt: string;
  title?: string;
  size?: number;
  classe?: string;
};

const DEFAULT_ICON_SIZE = 15;

export const IconAsImage = ({
  alt,
  image,
  classe,
  size,
  title,
}: IconAsImageProps) => {
  return (
    <Image
      src={`/assets/svg/${image}`}
      className={clsx(
        "w-4",
        classe,
        "hover:cursor-pointer hover:opacity-80 animate"
      )}
      width={size ? size : DEFAULT_ICON_SIZE}
      height={size ? size : DEFAULT_ICON_SIZE}
      alt={alt}
      title={title && title}
    />
  );
};
