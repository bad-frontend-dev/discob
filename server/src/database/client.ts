import { MongoClient } from "mongodb";

const username = encodeURIComponent(process.env.MONGO_INITDB_ROOT_USERNAME);
const password = encodeURIComponent(process.env.MONGO_INITDB_ROOT_PASSWORD);

const uri = `mongodb://${username}:${password}@mongo:21017/?authMechanism=DEFAULT`;

export const client = new MongoClient(uri);
