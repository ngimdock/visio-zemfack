import clsx from "clsx";

type ParaType = {
  children: string;
  classe?: string;
  size?: "sm" | "md" | "lg";
};

export const P = ({ children, size, classe }: ParaType) => {
  return (
    <p
      className={clsx(
        size === "sm" && "text-sm",
        size === "md" && "text-md",
        size === "lg" && "text-lg",
        "mt-3 sm:text-md text-light-dark",
        classe
      )}
    >
      {children}
    </p>
  );
};

const defaultProps: ParaType = {
  children: "paragraph",
  size: "md",
};

P.defaultProps = defaultProps;
