import { IconAsImage } from "../iconAsImage/iconAsImage";

type InputType = {
  value?: string;
  placeholder?: string;
  type: "number" | "text" | "search";
  name?: string;
  icon?: string;
};
export const Input = ({ type, icon, name, placeholder, value }: InputType) => {
  return (
    <div className="box-border flex items-center pl-2 space-x-1 border rounded-md border-custom-indigo/10">
      {icon && <IconAsImage alt={name ?? "icon"} image={icon} />}
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        className=" placeholder:-translate-y-[2px] placeholder:text-xx py-1 text-custom-gray pl-1 placeholder:text-custom-gray bg-primary  focus:outline-none focus:border-0  caret-custom-gray"
      />
    </div>
  );
};

const defaultProps: InputType = {
  type: "text",
  placeholder: "Entrer du text",
  value: "",
};

Input.defaultvalue = defaultProps;
