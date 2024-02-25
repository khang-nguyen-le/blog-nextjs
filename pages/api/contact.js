import { connectDatabase, insertDocument } from "@/lib/db-utils";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !name ||
      !message ||
      !email.includes("@") ||
      !name.trim() === "" ||
      !message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input!" });
      return;
    }

    const newMessage = { email, name, message };

    let client;

    try {
      client = await connectDatabase();
    } catch (err) {
      res.status(500).json({ message: "Connecting to the database failed!" });
      return;
    }

    try {
      await insertDocument(client, "contacts", newMessage);
    } catch (err) {
      res.status(500).json({ message: "Inserting data failed!" });
    } finally {
      client.close();
    }

    res
      .status(201)
      .json({ message: "Successfully sent message!", data: newMessage });
  }
}
