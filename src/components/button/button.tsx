import clsx from "clsx";

type ButtonType = {
  children?: string | React.ReactNode;
  size?: "sm" | "md" | "lg";
  color?: "blue" | "pink" | "yelow" | "indigo" | "gray";
  type?: "button" | "link";
  fullWidth?: boolean;
  isLoading?: boolean;
  classe?: string;
  icon?: React.ReactNode;
  action?: () => void;
};

export const Button = ({
  children,
  size,
  color,
  fullWidth,
  isLoading,
  classe,
  type,
  icon,
  action,
  ...restProps
}: ButtonType) => {
  return (
    <button
      onClick={action}
      className={clsx(
        "text-xs animate flex justify-center space-x-2 items-center text-center text-light uppercase  font-meduim letter-shrink rounded-lg hover:-translate-y-1.5 hover:shadow text-white",
        color === "blue" && "bg-custom-blue",
        color === "pink" && "bg-custom-pink",
        color === "yelow" && " bg-custom-yelow",
        color === "indigo" && "bg-custom-indigo",
        color === "gray" && "bg-custom-gray",
        size === "sm" && "text-xs py-2 px-6",
        size === "lg" ? "text-lg py-5 px-8" : "text-sm py-4 px-8",
        fullWidth && "w-full",
        classe
      )}
      {...restProps}
    >
      <div>
        <p className="text-lg "> {icon}</p>
        <span>{children}</span>
      </div>
    </button>
  );
};

const defaultProps: ButtonType = {
  size: "md",
  color: "indigo",
  children: "Cliquer ici",
  fullWidth: false,
  isLoading: false,
  type: "button",
};

Button.defaulProsps = defaultProps;
