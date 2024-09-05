class Circulo {
    constructor(radio) {
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * this.radio * this.radio;
    }

    calcularPerimetro() {
        return 2 * Math.PI * this.radio;
    }
}


