"use client";

import { createContext, useContext } from "react";

export const ToastContext = createContext({
  isOpen: false,
  message: "",
  displayToast: (message: string) => {},
  hideToast: () => {},
});

export const useToastContext = () => useContext(ToastContext);
