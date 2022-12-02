//Variables
let largo = parseInt(process.argv.slice(2));
let vivos = parseInt(process.argv.slice(3));
let turnos = parseInt(process.argv.slice(4));
let max = largo - 1;
let min = 0;
let fila_ran = Math.floor(Math.random() * (max - min + 1) + min);
let columna_ran = Math.floor(Math.random() * (max - min + 1) + min);
let contador_vidas = 0;
let matriz_juego = [];
let matriz_resultante = [];
let stop_emergencia = 0;



//Creacion del tablero de juego vacio
for (let i = 0; i < largo; i++) {
  let fila = [];
  for (let j = 0; j < largo; j++) {
    fila.push("-");
  }
  matriz_juego.push(fila);
}
for (let i = 0; i < largo; i++) {
  let fila = [];
  for (let j = 0; j < largo; j++) {
    fila.push("-");
  }
  matriz_resultante.push(fila);
}

//Se agregan los espacios vivos al azar
while (contador_vidas < vivos && stop_emergencia != 1) {
  if (matriz_juego[fila_ran][columna_ran] == "-") {
    matriz_juego[fila_ran][columna_ran] = "X";
    matriz_resultante[fila_ran][columna_ran] = "X"
    contador_vidas++;
  }
  fila_ran = Math.floor(Math.random() * (max - min + 1) + min);
  columna_ran = Math.floor(Math.random() * (max - min + 1) + min);
}

//Validaciones
function validacion(a, b, c) {
  if ((a > 0) && (b > 0) && (b <= (a * a)) && (c > 0)) {
    juego(turnos, matriz_juego, matriz_resultante);
  }
  else {
    console.log("Informacion no valida");
    stop_emergencia = 1;
  }
}

//Funciones
function juego(a, b, c) {
  let vivas = 0;
  let muertas = 0;
  let contador_turnos = 1;
  console.log("Tablero inicial: \n", b, "\n");

  while (contador_turnos <= a) {
    for (let i = 0; i < b.length; i++) {
      for (let j = 0; j < b.length; j++) {
        if (i == 0) {
          if (j == 0) {
            if (b[i][j + 1] == "-") {
              muertas++;
            } else { vivas++; }
            if (b[i + 1][j] == "-") {
              muertas++;
            } else { vivas++; }
            if (b[i + 1][j + 1] == "-") {
              muertas++;
            } else { vivas++; }
          }
          else if (j == b.length - 1) {
            if (b[i][j - 1] == "-") {
              muertas++;
            } else { vivas++; }
            if (b[i + 1][j - 1] == "-") {
              muertas++;
            } else { vivas++; }
            if (b[i + 1][j] == "-") {
              muertas++;
            } else { vivas++; }
          }
          else {
            if (b[i][j - 1] == "-") {
              muertas++;
            } else { vivas++; }
            if (b[i][j + 1] == "-") {
              muertas++;
            } else { vivas++; }
            if (b[i + 1][j - 1] == "-") {
              muertas++;
            } else { vivas++; }
            if (b[i + 1][j] == 0) {
              muertas++;
            } else { vivas++; }
            if (b[i + 1][j + 1] == 0) {
              muertas++;
            } else { vivas++; }
          }
        }
        else if (i == b.length - 1) {
          if (j == 0) {
            if (b[i - 1][j] == "-") {
              muertas++;
            } else { vivas++; }
            if (b[i - 1][j + 1] == "-") {
              muertas++;
            } else { vivas++; }
            if (b[i][j + 1] == "-") {
              muertas++;
            } else { vivas++; }
          }
          else if (j == b.length - 1) {
            if (b[i - 1][j - 1] == "-") {
              muertas++;
            } else { vivas++; }
            if (b[i - 1][j] == "-") {
              muertas++;
            } else { vivas++; }
            if (b[i][j - 1] == "-") {
              muertas++;
            } else { vivas++; }
          }
          else {
            if (b[i - 1][j - 1] == "-") {
              muertas++;
            } else { vivas++; }
            if (b[i - 1][j] == "-") {
              muertas++;
            } else { vivas++; }
            if (b[i - 1][j + 1] == "-") {
              muertas++;
            } else { vivas++; }
            if (b[i][j - 1] == "-") {
              muertas++;
            } else { vivas++; }
            if (b[i][j + 1] == "-") {
              muertas++;
            } else { vivas++; }
          }
        }
        else if (j == 0) {
          if (i != 0 || i != b.length - 1) {
            if (b[i - 1][j] == "-") {
              muertas++;
            } else { vivas++; }
            if (b[i - 1][j + 1] == "-") {
              muertas++;
            } else { vivas++; }
            if (b[i][j + 1] == "-") {
              muertas++;
            } else { vivas++; }
            if (b[i + 1][j] == "-") {
              muertas++;
            } else { vivas++; }
            if (b[i + 1][j + 1] == "-") {
              muertas++;
            } else { vivas++; }
          }
        }
        else if (j == b.length - 1) {
          if (i != 0 && i != b.length - 1) {
            if (b[i - 1][j - 1] == "-") {
              muertas++;
            } else { vivas++; }
            if (b[i - 1][j] == "-") {
              muertas++;
            } else { vivas++; }
            if (b[i][j - 1] == "-") {
              muertas++;
            } else { vivas++; }
            if (b[i + 1][j - 1] == "-") {
              muertas++;
            } else { vivas++; }
            if (b[i + 1][j] == "-") {
              muertas++;
            } else { vivas++; }
          }
        }
        else {
          if (b[i - 1][j - 1] == "-") {
            muertas++;
          } else { vivas++; }
          if (b[i - 1][j] == "-") {
            muertas++;
          } else { vivas++; }
          if (b[i - 1][j + 1] == "-") {
            muertas++;
          } else { vivas++; }
          if (b[i][j - 1] == "-") {
            muertas++;
          } else { vivas++; }
          if (b[i][j + 1] == "-") {
            muertas++;
          } else { vivas++; }
          if (b[i + 1][j - 1] == "-") {
            muertas++;
          } else { vivas++; }
          if (b[i + 1][j] == "-") {
            muertas++;
          } else { vivas++; }
          if (b[i + 1][j + 1] == "-") {
            muertas++;
          } else { vivas++; }
        }
        if (b[i][j] == "-" && vivas == 3) {
          c[i][j] = "X";
        }
        else if (b[i][j] == "X" && (vivas >= 2 && vivas <= 3)) {
          c[i][j] = "-";
        }
        vivas = 0;
        muertas = 0;
      }
    }
    for (let i = 0; i < b.length; i++) {
      for (let j = 0; j < b.length; j++) {
        b[i][j] = c[i][j];
      }
    }
    console.log("--------------------Turno", contador_turnos, "--------------------\n", b, "\n");

    contador_turnos++;
  }

}



//LLamado de funciones
function main() {
  validacion(largo, vivos, turnos);
}
//Zona de trabajo
main();