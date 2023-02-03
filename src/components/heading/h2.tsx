import clsx from "clsx";

type H2Type = {
  children: string;
  color: "white" | "custom-white" | "blue" | "indigo" | "gray";
  size: "sm" | "md" | "lg";
  classe?: string;
};

export const H2 = ({ children, color, size, classe }: H2Type) => {
  return (
    <h2
      className={clsx(
        "font-bold  title-h2  font-Inter",
        color === "blue" && "text-custom-blue",
        color === "white" && "text-white",
        color === "indigo" && "text-custom-indigo",
        color === "gray" && "text-custom-gray",
        size === "lg" && "text-6xl",
        size === "md" && "text-xl md:text-xl ",
        size === "sm" && "text-xl",
        classe
      )}
    >
      {children}
    </h2>
  );
};

const defaultProps: H2Type = {
  color: "white",
  size: "md",
  children: "Titre h2",
};

H2.defaultProps = defaultProps;
