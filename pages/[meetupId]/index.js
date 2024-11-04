import MeetupDetails from "@/components/meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb";
import React from "react";

export default function MeetupDetailsPage({ meetup }) {
  return <MeetupDetails meetup={meetup} />;
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGODB_SERVER_URL);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { projection: { _id: 1 } }).toArray();
  client.close();

  const paths = meetups.map((meetup) => ({
    params: { meetupId: meetup._id.toString() },
  }));

  return {
    fallback: false,
    paths: paths,
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  
  const client = await MongoClient.connect(process.env.MONGODB_SERVER_URL);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) });

  client.close();

  return {
    props: {
      meetup: {
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
      },
    },
  };
}
