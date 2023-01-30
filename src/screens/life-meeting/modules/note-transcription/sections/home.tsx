import { Avatar } from "@/components/avatar/avatar";
import { Badge } from "@/components/badge/badge";
import { P } from "@/components/p/p";
import { PERSON_PEER_TEAM } from "@/data/person-peer-team";
import { getFirstTwoLetters } from "@/utils";

export const Home = () => {
  const PersonPeerTeam = PERSON_PEER_TEAM.map((team) => {
    const displayMembers = team.teamMembers.map((person) => (
      <>
        <Badge key={person.id} background={person.color}>
          {person.name}
        </Badge>
        <br />
      </>
    ));

    return (
      <div key={team.teamName} className="mt-4">
        <P color="custom-gray" classe="font-medium">
          {team.teamName}
        </P>

        {displayMembers}
      </div>
    );
  });

  return (
    <section>
      <div className="mt-8">
        <HeadSection sectionTitle="Participants" />
      </div>

      {PersonPeerTeam}
      <div className="mt-8">
        <HeadSection sectionTitle="Chat" />

        <article className="flex mt-4 space-x-2">
          <Avatar text={getFirstTwoLetters("Rachel Adono")} />
          <div>
            <div className="flex items-end space-x-1">
              <P classe="font-bold">Rachel Adono</P>
              <span className="text-custom-gray text-[.6rem]">
                9 minutes ago
              </span>
            </div>
            <P color="custom-white" classe="mt-0.5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
              ipsa nihil non! Neque voluptatem, explicabo vitae tempora
              dignissimos officiis debitis eius facilis.
            </P>
          </div>
        </article>
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
