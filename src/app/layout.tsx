"use client";

import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { MeetingContextProvider } from "../providers/meetingContextProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className=" bg-primary">
      <head />
      <body>
        <Toaster position="bottom-right" reverseOrder={true} />
        <MeetingContextProvider>{children}</MeetingContextProvider>
      </body>
    </html>
  );
}
