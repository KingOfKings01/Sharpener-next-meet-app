import MeetupList from "@/components/meetups/MeetupList";
import { Dummy } from "@/public/Dummy";
import Head from "next/head";
import React from "react";

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of highly active react meetups!" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

// Fetch meetups from an API or a database
export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/fetch-meetups", {
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
