import {famosos} from './modulo/modulo.mjs';

/*
// loop for
for (let i = 0; i < famosos.length; i++) {
    console.log(famosos[i]);
}
*/

var contador = 0
while (contador < famosos.length) {
  console.log(`${famosos[contador]}`);
  contador++
}