import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;

      const { title, description, image, address } = data;

      const client = await MongoClient.connect(
        process.env.MONGODB_SERVER_URL
      );
      const db = client.db();

      const meetupsCollection = db.collection("meetups");

      const result = await meetupsCollection.insertOne({
        title,
        description,
        image,
        address,
      });

      console.log(result);

      client.close();

      res
        .status(201)
        .json({
          message: "Meetup added successfully",
          meetupId: result.insertedId,
        });
    } catch (err) {
      console.log(err);
    }
  }
}
