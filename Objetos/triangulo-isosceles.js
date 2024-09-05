class TrianguloIsosceles {
    constructor(base, lado) {
        this.base = base;
        this.lado = lado;
    }

    calcularArea() {
        // Usar el teorema de Pitágoras para encontrar la altura
        const altura = Math.sqrt(Math.pow(this.lado, 2) - Math.pow(this.base / 2, 2));
        return (this.base * altura) / 2;
    }

    calcularPerimetro() {
        return 2 * this.lado + this.base;
    }
}
