class TrianguloEquilatero {
    constructor(lado) {
        this.lado = lado;
    }

    calcularArea() {
        return (Math.sqrt(3) / 4) * Math.pow(this.lado, 2);
    }

    calcularPerimetro() {
        return 3 * this.lado;
    }
}
