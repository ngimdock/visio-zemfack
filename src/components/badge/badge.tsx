import clsx from "clsx";

export type BadgeProps = {
  children: string;
  background: "bleu" | "pink" | "yellow" | "indigo" | "gray";
  size: "xx" | "sm" | "md" | "lg";
  classe?: string;
};

export const Badge = ({ children, background, classe, size }: BadgeProps) => {
  return (
    <div
      className={clsx(
        classe,
        size === "xx" && "text-[.57rem] py-[.6px] px-1.5",
        size === "sm" && "text-[.6rem] py-0.5 px-2",
        "text-custom-white inline rounded-sm",
        background === "bleu" && "bg-custom-bleu",
        background === "pink" && "bg-custom-pink",
        background === "yellow" && " bg-custom-yelow",
        background === "indigo" && "bg-custom-indigo",
        background === "gray" && "bg-custom-gray"
      )}
    >
      {children}
    </div>
  );
};

const defaultProps: BadgeProps = {
  background: "bleu",
  size: "xx",
  children: "",
};

Badge.defaultProps = defaultProps;
