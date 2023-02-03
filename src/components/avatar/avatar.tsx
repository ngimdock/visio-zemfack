import clsx from "clsx";

export type AvatarType = {
  image?: string;
  text?: string;
  color: "blue" | "pink" | "yelow" | "indigo";
  size: "xs" | "sm" | "md" | "lg";
};
export const Avatar = ({ color, size, image, text }: AvatarType) => {
  return (
    <div
      className={clsx(
        "rounded-full text-center flex justify-center items-center uppercase",
        size === "xs" && "w-3 h-3 p-2.5 text-[9px]",
        size === "sm" && "w-4 h-4 text-xx",
        size === "md" && "w-6 h-6 text-xx",
        size === "lg" && "w-8 h-8 text-sm",
        color === "blue" && "bg-custom-blue",
        color === "pink" && "bg-custom-pink",
        color === "yelow" && "bg-custom-yelow",
        color === "indigo" && "bg-custom-indigo"
      )}
    >
      {text}
    </div>
  );
};

const defaultProps: AvatarType = {
  color: "pink",
  size: "xs",
};

Avatar.defaultProps = defaultProps;
