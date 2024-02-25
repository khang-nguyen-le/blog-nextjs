import { MongoClient, ServerApiVersion } from "mongodb";

export async function connectDatabase() {
  const uri = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.upui3rq.mongodb.net/?retryWrites=true&w=majority`;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  const clientConnection = await client.connect();

  return clientConnection;
}

export async function insertDocument(client, collection, document) {
  const db = await client.db(`${process.env.mongodb_database}`);

  const result = await db.collection(collection).insertOne(document);

  return result;
}
