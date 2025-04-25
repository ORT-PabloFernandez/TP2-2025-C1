//mongodb+srv://admin:tp2@cluster0.3bm3a.azure.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
import { MongoClient } from "mongodb";
const uri =
  "mongodb+srv://admin:@cluster0.3bm3a.azure.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

let instance = null;

// TODO: Investigar sobre asincronismo en Javascript
// para que es el async, como se usan las promesas y para que sirbe el await
export default async function getConnection() {
  if (instance == null) {
    try {
      instance = await client.connect();
    } catch (error) {
      console.log(error.message);
    }
  }
  console.log("coneccion creada");
  return instance;
}
