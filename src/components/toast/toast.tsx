import { useToastContext } from "@/contexts/toastContext";
import { RxCross2 } from "react-icons/rx";

export type ToastProps = {
  message: string;
};

export const Toast = ({ message }: ToastProps) => {
  const { hideToast } = useToastContext();
  return (
    <div className="absolute z-40 flex items-center justify-center max-w-sm p-4 space-x-2 font-medium text-center rounded-lg bottom-5 right-5 font-Inter bg-custom-white">
      <p className="text-sm text-primary font-Inter text-ce ">{message}</p>
      <RxCross2
        className="text-lg cursor-pointer"
        onClick={() => hideToast()}
      />
    </div>
  );
};
