let ancho = parseInt(process.argv.slice(2));
let vivos = parseInt(process.argv.slice(3));
let turnos = parseInt(process.argv.slice(4));
let tablero1 = [];
let tablero2 = [];

validacion(ancho, vivos, turnos);
// Se llevan acabo las validaciones
function validacion(a, v, t) {
  if ((a > 0) && (v > 0) && (v <= (a * a)) && (t > 0)) {
    juego(turnos);
  }
  else {
    console.log("Informacion no valida");
  }
}
// Se crean las matrices
function formato(a, t1, t2) {
  //Creacion del tablero de juego vacio
  for (let i = 0; i < a; i++) {
    let fila = [];
    for (let j = 0; j < a; j++) {
      fila.push("-");
    }
    t1.push(fila);
  }
  for (let i = 0; i < a; i++) {
    let fila = [];
    for (let j = 0; j < a; j++) {
      fila.push("-");
    }
    t2.push(fila);
  }
}
// Se crea el primer tablero
function primer_tablero(a, t1) {
  let max = a - 1;
  let min = 0;
  let fila_ran = Math.floor(Math.random() * (max - min + 1) + min);
  let columna_ran = Math.floor(Math.random() * (max - min + 1) + min);
  let contador_vidas = 0;
  //Se agregan los espacios vivos al azar
  while (contador_vidas < vivos) {
    if (t1[fila_ran][columna_ran] == "-") {
      t1[fila_ran][columna_ran] = "X";
      contador_vidas++;
    }
    fila_ran = Math.floor(Math.random() * (max - min + 1) + min);
    columna_ran = Math.floor(Math.random() * (max - min + 1) + min);
  }
}
// Se lleva acabo un turno de juego
function turno(t1, t2) {
  let vivas = 0;
  let fila = [];

  for (let i = 0; i < t1.length; i++) {
    for (let j = 0; j < t1.length; j++) {
      if (i == 0) {
        if (j == 0) {
          if (t1[i][j + 1] == "X") {
            vivas++;
          }
          if (t1[i + 1][j] == "  X") {
            vivas++;
          }
          if (t1[i + 1][j + 1] == "X") {
            vivas++;
          }
        }
        else if (j == t1.length - 1) {
          if (t1[i][j - 1] == "X") {
            vivas++;
          }
          if (t1[i + 1][j - 1] == "X") {
            vivas++;
          }
          if (t1[i + 1][j] == "X") {
            vivas++;
          }
        }
        else {
          if (t1[i][j - 1] == "X") {
            vivas++;
          }
          if (t1[i][j + 1] == "X") {
            vivas++;
          }
          if (t1[i + 1][j - 1] == "X") {
            vivas++;
          }
          if (t1[i + 1][j] == "X") {
            vivas++;
          }
          if (t1[i + 1][j + 1] == "X") {
            vivas++;
          }
        }
      }
      else if (i == t1.length - 1) {
        if (j == 0) {
          if (t1[i - 1][j] == "X") {
            vivas++;
          }
          if (t1[i - 1][j + 1] == "X") {
            vivas++;
          }
          if (t1[i][j + 1] == "X") {
            vivas++;
          }
        }
        else if (j == t1.length - 1) {
          if (t1[i - 1][j - 1] == "X") {
            vivas++;
          }
          if (t1[i - 1][j] == "X") {
            vivas++;
          }
          if (t1[i][j - 1] == "X") {
            vivas++;
          }
        }
        else {
          if (t1[i - 1][j - 1] == "X") {
            vivas++;
          }
          if (t1[i - 1][j] == "X") {
            vivas++;
          }
          if (t1[i - 1][j + 1] == "X") {
            vivas++;
          }
          if (t1[i][j - 1] == "X") {
            vivas++;
          }
          if (t1[i][j + 1] == "X") {
            vivas++;
          }
        }
      }
      else if (j == 0) {
        if (i != 0 || i != t1.length - 1) {
          if (t1[i - 1][j] == "X") {
            vivas++;
          }
          if (t1[i - 1][j + 1] == "X") {
            vivas++;
          }
          if (t1[i][j + 1] == "X") {
            vivas++;
          }
          if (t1[i + 1][j] == "X") {
            vivas++;
          }
          if (t1[i + 1][j + 1] == "X") {
            vivas++;
          }
        }
      }
      else if (j == t1.length - 1) {
        if (i != 0 && i != t1.length - 1) {
          if (t1[i - 1][j - 1] == "X") {
            vivas++;
          }
          if (t1[i - 1][j] == "X") {
            vivas++;
          }
          if (t1[i][j - 1] == "X") {
            vivas++;
          }
          if (t1[i + 1][j - 1] == "X") {
            vivas++;
          }
          if (t1[i + 1][j] == "X") {
            vivas++;
          }
        }
      }
      else {
        if (t1[i - 1][j - 1] == "X") {
          vivas++;
        }
        if (t1[i - 1][j] == "X") {
          vivas++;
        }
        if (t1[i - 1][j + 1] == "X") {
          vivas++;
        }
        if (t1[i][j - 1] == "X") {
          vivas++;
        }
        if (t1[i][j + 1] == "X") {
          vivas++;
        }
        if (t1[i + 1][j - 1] == "X") {
          vivas++;
        }
        if (t1[i + 1][j] == "X") {
          vivas++;
        }
        if (t1[i + 1][j + 1] == "X") {
          vivas++;
        }
      }
      if (t1[i][j] == "-" && vivas == 3) {
        t2[i][j] = "X";
      }
      else if (t1[i][j] == "X" && (vivas < 2 || vivas > 3)) {
        t2[i][j] = "-";
      }
      else if (t1[i][j] == "X" && (vivas >= 2 && vivas <= 3)) {
        t2[i][j] = "X";
      }
      vivas = 0;
    }
  }
  console.table(t2)
}
//Se resetean los tableros para el siguiente turno
function reset(t1, t2) {
  for (let i = 0; i < t1.length; i++) {
    for (let j = 0; j < t1.length; j++) {
      if (t2[i][j] == "X") {
        t1[i][j] = "X"
      } else {
        t1[i][j] = "-"
      }
    }
  }
}
// Se lleva acabo el juego
function juego(t) {
  let contador_turnos = 1;

  formato(ancho, tablero1, tablero2);
  primer_tablero(ancho, tablero1);
  console.log("-----------Tablero Inicial del juego----------\n");
  console.table(tablero1);
  while (contador_turnos <= t) {
    console.log("Turno:", contador_turnos);
    console.log("----------------------------------------\n");
    turno(tablero1, tablero2, ancho);
    contador_turnos++;
    reset(tablero1, tablero2);
  }
}