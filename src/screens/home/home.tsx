import { ButtonLink } from "@/components/button/button-link";
import { H2 } from "@/components/heading/h2";

export const HomeContent = () => {
  return (
    <section className="absolute top-[44%] left-[50%] text-center translate-x-[-50%] translate-y-[-50%]">
      <H2>welcome to your visio meeting.</H2>
      <ButtonLink href="life-meeting" color="bleu" classe="mt-5">
        Join the meeting
      </ButtonLink>
    </section>
  );
};
