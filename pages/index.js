import MeetupList from "@/components/meetups/MeetupList";
import { Dummy } from "@/public/Dummy";
import React from "react";

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: Dummy,
    },
  }
}