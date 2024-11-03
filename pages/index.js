import MeetupList from "@/components/meetups/MeetupList";
import { Dummy } from "@/public/Dummy";
import React from "react";

export default function HomePage() {
  
  return <MeetupList meetups={Dummy} />;
}
