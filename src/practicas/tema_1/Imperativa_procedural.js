// Procedimiento para calcular el área de un círculo
function calcularAreaCirculo(radio) {
    const PI = 3.14159; // Definimos una constante
    return PI * radio * radio; // Fórmula del área
  }
  
  // Ejemplo de uso
  const radio = 5;
  const area = calcularAreaCirculo(radio);
  console.log(`El área del círculo con radio ${radio} es: ${area}`);
  