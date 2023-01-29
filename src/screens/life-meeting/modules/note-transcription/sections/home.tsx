import { P } from "@/components/p/p";

export const Home = () => {
  return (
    <section>
      <div className="mt-8">
        <HeadSection sectionTitle="Participants" />
      </div>
      <div className="mt-8">
        <HeadSection sectionTitle="Chat" />
      </div>
    </section>
  );
};

function HeadSection({ sectionTitle }: { sectionTitle: string }) {
  return (
    <div>
      <P classe="font-medium">{sectionTitle}</P>
      <div className="h-[.7px] w-full mt-1 bg-custom-gray/30"></div>
    </div>
  );
}
