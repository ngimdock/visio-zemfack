import clsx from "clsx";

type ParaType = {
  children: string;
  classe?: string;
  color?: string;
  size?: "xx" | "xs" | "sm" | "base";
};

export const P = ({ children, size, classe, color }: ParaType) => {
  return (
    <p
      className={clsx(
        size === "xx" && "text-xx",
        size === "xs" && "text-xs",
        size === "sm" && "text-sm",
        "text-white",
        color,
        classe
      )}
    >
      {children}
    </p>
  );
};

const defaultProps: ParaType = {
  children: "paragraph",
  color: "text-custom-white",
  size: "xx",
};

P.defaultProps = defaultProps;
