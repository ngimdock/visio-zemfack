"use client";

import { Button } from "@/components/button/button";
import { H2 } from "@/components/heading/h2";
import { useRouter } from "next/navigation";

export default function Home() {
  const MEETING_ROOM_ID = "123";

  const router = useRouter();

  const handleJoinMeeting = (meetingId: string) => {
    router.push(`life-meeting`);
  };

  return (
    <main className="relative h-screen text-center bg-primary ">
      <div className="absolute top-[44%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <H2>welcome to your visio meeting.</H2>

        <Button
          color="indigo"
          classe="w-full mt-4"
          action={() => handleJoinMeeting(MEETING_ROOM_ID)}
        >
          See all your meetings
        </Button>
      </div>
    </main>
  );
}
