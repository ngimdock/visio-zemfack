import { H2 } from "@/components/heading/h2";
import React from "react";

export default function NotFound() {
  return (
    <section className="relative h-screen text-center bg-primary ">
      <div className="absolute top-[44%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <H2>We could not found the meeting you are looking for.</H2>
      </div>
    </section>
  );
}
