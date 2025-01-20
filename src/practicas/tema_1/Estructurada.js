function esPrimo(numero) {
  // Caso especial: Los números menores o iguales a 1 no son primos
  if (numero <= 1) {
    return false;
  }

  // Verificamos si el número tiene divisores entre 2 y su raíz cuadrada
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false; // Si encontramos un divisor, no es primo
    }
  }

  // Si no encontramos divisores, es un número primo
  return true;
}