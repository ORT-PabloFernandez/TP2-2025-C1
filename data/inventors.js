import { ObjectId } from "mongodb";
import getConnection from "./connection.js";

// getInventors
export async function getInventors() {
  const clientmongo = await getConnection();

  const inventors = clientmongo
    .db("sample_tp2")
    .collection("inventors")
    .find()
    .toArray();
  console.log(inventors);
  return inventors;
}

// getIventor
export async function getIventor(id) {
  const clientmongo = await getConnection();
  const inventor = clientmongo
    .db("sample_tp2")
    .collection("inventors")
    .findOne({ _id: new ObjectId(id) });

  return inventor;
}

// addInventor
export async function addInventor(inventor) {
  // el parametro inventor no deberia tener el _id
  const clientmongo = await getConnection();
  // retorna info con el ObjectID
  const result = clientmongo
    .db("sample_tp2")
    .collection("inventors")
    .insertOne(inventor);
  return result;
}
// updateInventor
export async function updateInventor(inventor) {
  // el parametro tiene el _id (que es el que vamos actualizar) y
  // las propiedades para actualizar
  const clientmongo = await getConnection();
  const query = { _id: new ObjectId(inventor._id) };
  const newValues = {
    $set: {
      first: inventor.first,
      last: inventor.last,
      year: inventor.year,
    },
  };

  const result = clientmongo
    .db("sample_tp2")
    .collection("inventors")
    .updateOne(query, newValues);
  return result;
}

// deleteInventor
export async function deleteIventor(id) {
  const clientmongo = await getConnection();
  const result = clientmongo
    .db("sample_tp2")
    .collection("inventors")
    .deleteOne({ _id: new ObjectId(id) });

  return result;
}
