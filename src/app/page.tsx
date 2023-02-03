import { ButtonLink } from "@/components/button/button-link";
import { H2 } from "@/components/heading/h2";

export default function Home() {
  return (
    <main className="relative h-screen text-center bg-primary ">
      <div className="absolute top-[44%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <H2>welcome to your visio meeting.</H2>
        <ButtonLink href="life-meeting" color="blue" classe="mt-5">
          Join the meeting
        </ButtonLink>
      </div>
    </main>
  );
}
