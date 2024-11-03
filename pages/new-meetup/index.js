import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import React from "react";

export default function NewMeetupPage() {

  function addMeetupHandler (enteredMeetupData){
    console.log(enteredMeetupData);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler}/>;
}
