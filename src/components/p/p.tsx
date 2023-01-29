import clsx from "clsx";

type ParaType = {
  children: string;
  classe?: string;
  size?: "xs" | "sm" | "md" | "lg";
};

export const P = ({ children, size, classe }: ParaType) => {
  return (
    <p
      className={clsx(
        size === "xs" && "text-xs",
        size === "sm" && "text-sm",
        size === "md" && "text-md",
        size === "lg" && "text-lg",
        "text-white",
        classe
      )}
    >
      {children}
    </p>
  );
};

const defaultProps: ParaType = {
  children: "paragraph",
  size: "xs",
};

P.defaultProps = defaultProps;
