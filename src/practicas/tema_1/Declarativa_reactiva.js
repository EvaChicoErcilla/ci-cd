// Importar RxJS (si estás en un entorno compatible con Node.js)
const { from } = require('rxjs');
const { map, reduce } = require('rxjs/operators');

// Flujo de datos reactivo
const numeros = from([1, 2, 3, 4, 5]);

// Operaciones reactivas
numeros
  .pipe(
    map(n => n * n),        // Transformar cada número al cuadrado
    reduce((acc, n) => acc + n, 0) // Sumar los cuadrados
  )
  .subscribe(resultado => console.log("Suma de cuadrados:", resultado));
