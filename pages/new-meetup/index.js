import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import React from "react";

export default function NewMeetupPage() {

  const route = useRouter()

 async function addMeetupHandler (enteredMeetupData){
    
  try{

    const response = await fetch("/api/new-meetup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(enteredMeetupData)
    })
    
    if (!response.ok) {
      throw new Error("Failed to add meetup");
    }
    
    const data = await response.json();
    console.log("Meetup added successfully: ", data);

    route.push("/");
  } catch (err) {
    console.error("Error while adding meetup: ", err);
    alert("Failed to add meetup. Please try again.");
  }

  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler}/>;
}
