import { PropsChildren } from "@/types";
import { MeetingContextProvider } from "./meetingContextProvider";
import { ToastContextProvider } from "./toastContextProvider";

export const RootContextProvider = ({ children }: PropsChildren) => {
  return (
    <ToastContextProvider>
      <MeetingContextProvider>{children}</MeetingContextProvider>
    </ToastContextProvider>
  );
};
