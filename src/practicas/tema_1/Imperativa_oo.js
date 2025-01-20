// Clase que modela un círculo
class Circulo {
    constructor(radio) {
      this.radio = radio; // Propiedad
    }
  
    // Método para calcular el área
    calcularArea() {
      const PI = 3.14159;
      return PI * this.radio * this.radio;
    }
  }
  
  // Crear un objeto de la clase
  const miCirculo = new Circulo(5);
  console.log(`El área del círculo con radio ${miCirculo.radio} es: ${miCirculo.calcularArea()}`);  