import "@/styles/globals.css";
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
        <MeetingContextProvider>{children}</MeetingContextProvider>
      </body>
    </html>
  );
}
