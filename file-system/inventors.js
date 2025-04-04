import fs from "fs";
const PATH = "./inventors.json";

function getAll() {
  return JSON.parse(fs.readFileSync(PATH, "utf-8"));
}

function get(id) {
  const inventors = getAll();
  return inventors.find((inventor) => inventor._id == id);
}

function add(inventor) {
  const inventors = getAll();
  inventors.push(inventor);
  // escritura en archivo json
  fs.writeFileSync(PATH, JSON.stringify(inventors, null, 2));
}

//TODO actualizar un inventor -> id que hay que modificar y las propiedades que se se modifican
function update(inventor) {}

//TODO eliminar un inventor
function remove(id) {}

//console.log(get(5));
add({
  _id: 11,
  first: "Pablo2",
  last: "Hinojosa2",
  year: 1978,
});
