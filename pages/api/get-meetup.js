import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const client = await MongoClient.connect(process.env.MONGODB_SERVER_URL);
      const db = client.db();

      const meetupsCollection = db.collection("meetups");

      const meetupId = req.param.id;

      const result = await meetupsCollection.find().toArray();

      console.log(result);

      client.close();

      const meetups = result.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
      }));

      res.status(200).json(meetups);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
