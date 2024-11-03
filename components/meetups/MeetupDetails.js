import React from "react";
import classes from "./MeetupDetails.module.css";
import Card from "../ui/Card";
export default function MeetupDetails({ meetup }) {
  return (
    <Card>
      <div className={classes.image}>
        <img src={meetup?.image} alt={meetup?.title} />
      </div>
      <div className={classes.content}>
        <h3>{meetup?.title}</h3>
        <address>{meetup?.address}</address>
      </div>
    </Card>
  );
}
