import MeetupDetails from "@/components/meetups/MeetupDetails";
import { Dummy } from "@/public/Dummy";
import React from "react";

export default function MeetupDetailsPage({ meetup }) {
  return <MeetupDetails meetup={meetup} />;
}

export async function getStaticPaths() {
  const paths = Dummy.map((meetup) => ({
    params: { meetupId: meetup.id.toString() },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const meetup = Dummy.find((meetup) => meetup.id.toString() === meetupId);

  return {
    props: {
      meetup: meetup,
    },
  };
}

