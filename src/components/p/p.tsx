import clsx from "clsx";

type ParaType = {
  children: string;
  classe?: string;
  color?: "white" | "custom-white" | "custom-gray";
  size?: "xx" | "xs" | "sm" | "base";
};

export const P = ({ children, size, classe, color }: ParaType) => {
  return (
    <p
      className={clsx(
        size === "xx" && "text-xx",
        size === "xs" && "text-xs",
        size === "sm" && "text-sm",
        color === "white" && "text-white",
        color === "custom-white" && "text-custom-white",
        color === "custom-gray" && "text-custom-gray",
        classe
      )}
    >
      {children}
    </p>
  );
};

const defaultProps: ParaType = {
  children: "paragraph",
  color: "white",
  size: "xx",
};

P.defaultProps = defaultProps;
