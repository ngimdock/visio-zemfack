"use client";

import { H2 } from "@/components/heading/h2";
import { P } from "@/components/p/p";
import { MEETINGS, MeetingType } from "@/mockDatas";
import Link from "next/link";

export default function LifeMeeting() {
  return (
    <section className="max-w-5xl px-4 py-10 mx-auto mt-16 bg-primary">
      <H2 classe="text-center">Here are all your meetings</H2>

      <div className="grid gap-4 mt-5 xs:grid-cols-2 md:grid-cols-3">
        {MEETINGS.map((meeting) => (
          <MeetingCard key={meeting.id} {...meeting} />
        ))}
      </div>
    </section>
  );
}

const MeetingCard = (meetingData: MeetingType) => {
  return (
    <Link
      href={`life-meeting/${meetingData.id}`}
      className="flex flex-col items-center justify-center p-5 text-center bg-white shadow-lg font-Inter rounded-xl bg-gradient-to-r from-custom-indigo to-custom-blue"
    >
      <div className="flex flex-col items-center justify-center w-full h-full mt-4">
        <h3 className="text-xl font-semibold font-Inter text-primary">
          {"# " + meetingData.id}
        </h3>
        <p className="text-xl font-semibold text-primary">
          {meetingData.title}
        </p>
        <P size="sm">{meetingData.description}</P>
      </div>
    </Link>
  );
};
