import MeetupList from "@/components/meetups/MeetupList";
import { Dummy } from "@/public/Dummy";
import React from "react";

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getStaticProps(props) {

//   console.log(props);

//   return {
//     props: {
//       meetups: Dummy,
//     },
//   }
// }

// Fetch meetups from an API or a database
export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/fetch-meetups', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return {
    props: {
      meetups: data,
    },
  };
}