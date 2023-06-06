let band = {
  name: "Blind Guardian",
  formedIn: 1986,
  lastAlbum: "Beyond the Red Mirror",
};

let info = {
  genre: "Power Metal",
  lastAlbum: "Twilight Orchestra: Legacy of the Dark Lands",
};

let clone = Object.assign(band, info);
console.log(clone);

let obj = { chave1: "a", chave2: "b", chave3: "c" };

let key = Object.keys(obj);
console.log(key);
