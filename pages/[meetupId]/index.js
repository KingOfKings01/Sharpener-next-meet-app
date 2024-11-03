import MeetupDetails from "@/components/meetups/MeetupDetails";
import { Dummy } from "@/public/Dummy";
import { useRouter } from "next/router";
import React from "react";

export default function MeetupDetailsPage() {
  const router = useRouter();
  const meetupId = router.query.meetupId;

  const meetup = Dummy.find((meetup) => meetup.id === meetupId);
  
  return <MeetupDetails meetup={meetup} />;
}
