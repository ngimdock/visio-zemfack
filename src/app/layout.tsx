"use client";

import { RootContextProvider } from "@/providers/RootContextProvider";
import "@/styles/globals.css";
import { PropsChildren } from "@/types";

export default function RootLayout({ children }: PropsChildren) {
  const toastOptions = {
    position: "bottom",
    timeout: 1000,
  };

  return (
    <html className=" bg-primary">
      <head />
      <body className="relative">
        {/* <Toaster
          position="bottom-right"
          reverseOrder={true}
          containerClassName="container-tost"
        /> */}

        <RootContextProvider>{children}</RootContextProvider>
      </body>
    </html>
  );
}
