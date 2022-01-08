#! node

const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let arg = process.argv[2];
let xyz = [];


for (let x = 0; x < abc.length; x++) {
  if (arg === abc[x]) {
    for (x; x < abc.length; x++) {
    xyz += abc[x]
    }
  console.log(xyz)
  }
}

if (xyz[0] === undefined ) {
  console.log("Veuillez indiquer au script, une lettre de l'alphabet")
}
