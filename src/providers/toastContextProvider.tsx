import { ToastContext } from "@/contexts/toastContext";
import { useEffect, useState } from "react";

export const ToastContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const TIME_TO_CLOSE_TOAST = 3600;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const displayToast = (message: string) => {
    setMessage(message);
    setIsOpen(true);
  };

  const hideToast = () => {
    setMessage("");
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    setTimeout(() => {
      setIsOpen(false);
    }, TIME_TO_CLOSE_TOAST);
  }, [isOpen]);

  const contextValue = {
    isOpen,
    message,
    displayToast,
    hideToast,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
};
