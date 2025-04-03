/**
 * En el siguiente array de objetos (beers)
 * 1.- Desarrollar una function que retorne un array que incluya el precio segun el siguiente criterio
 *     a) Si el  grado alcoholico es < a 5.0 el precio es 300
 *     b) Si el grado alcoholico es >= 5.0 el precio es 350
 *     c) La cerveza 'Purple Iris' esta de oferta y si precio es 320
 * (map)
 * 2.- Desarrolle una función que inserte la propiedad file_name a cada uno de los objetos, esta propiedad debe tener solo
 * el nombre del archivo de la propiedad label (upload_xOMnlK-large.png, etc..)
 * (map)
 * 3.- Desarrollo una funcion que ordene por tipo (type)
 * (sort)
 * 
 
 /*
  Beers
*/

const beers = [
  {
    name: "Purple Iris",
    abv: 6.8,
    label:
      "https://s3.amazonaws.com/brewerydbapi/beer/dMLwGo/upload_yiUllE-large.png",
    type: "IPA",
  },
  {
    name: "Orange Blossom Pilsner",
    abv: 5.5,
    label:
      "https://s3.amazonaws.com/brewerydbapi/beer/Rczcb9/upload_9Nhxxl-large.png",
    type: "Pilsner",
  },
  {
    name: "Darkness",
    abv: 4.2,
    label:
      "https://s3.amazonaws.com/brewerydbapi/beer/lnxbIV/upload_idNXFf-large.png",
    type: "Stout",
  },
  {
    name: "Belgian Wit",
    abv: 5.4,
    label:
      "https://s3.amazonaws.com/brewerydbapi/beer/3CvVQG/upload_xOMnlK-large.png?client=343&sdfsdf=sdf",
    type: "Wheat",
  },
  {
    name: "Stolen Fruit",
    abv: 4.6,
    label:
      "https://s3.amazonaws.com/brewerydbapi/beer/YGT30k/upload_uVCHP7-large.png",
    type: "Wheat",
  },
];

const orderbyTypeBeers = (beers) =>
  beers.sort((a, b) => (a.type > b.type ? 1 : -1));

const addFilesNameBeers = (beers) =>
  beers.map((beer) => ({
    ...beer,
    fileName: setFileNameBeer(beer),
  }));

// TODO: Considerar el caso en el cual la URL tiene parametros
const setFileNameBeer = (beer) => beer.label.split("/").pop();

const addPricesBeers = (beers) =>
  beers.map((beer) => ({
    // name: beer.name,
    // abv: beer.abv,
    // label: beer.label,
    // type: beer.type,
    ...beer,
    price: setPriceBeer(beer),
  }));
// function setPriceBeer(beer) {
//   let price = 0;
//   if (beer.name == "Purple Iris") {
//     price = 320;
//   } else if (beer.abv < 5) {
//     price = 300;
//   } else if (beer.abv >= 5) {
//     price = 350;
//   }

//   return price;
// }

const setPriceBeer = (beer) => {
  if (beer.name == "Purple Iris") {
    return 320;
  } else if (beer.abv < 5) {
    return 300;
  } else if (beer.abv >= 5) {
    return 350;
  }
};

console.log(orderbyTypeBeers(addFilesNameBeers(addPricesBeers(beers))));
