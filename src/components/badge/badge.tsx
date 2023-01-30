import clsx from "clsx";

export type BadgeProps = {
  children: string;
  background: "bleu" | "pink" | "yellow" | "indigo";
  classe?: string;
};

export const Badge = ({ children, background, classe }: BadgeProps) => {
  return (
    <div
      className={clsx(
        classe,
        "text-xx py-[.6px] px-2 text-custom-white inline rounded-sm",
        background === "bleu" && "bg-custom-bleu",
        background === "pink" && "bg-custom-pink",
        background === "yellow" && " bg-custom-yelow",
        background === "indigo" && "bg-custom-indigo"
      )}
    >
      {children}
    </div>
  );
};

const defaultProps: BadgeProps = {
  background: "bleu",
  children: "",
};

Badge.defaultProps = defaultProps;
