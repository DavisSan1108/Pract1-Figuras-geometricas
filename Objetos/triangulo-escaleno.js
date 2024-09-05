class TrianguloEscaleno {
    constructor(base, altura, lado1, lado2, lado3) {
        this.base = base;
        this.altura = altura;
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    calcularArea() {
        return (this.base * this.altura) / 2;
    }

    calcularPerimetro() {
        return this.lado1 + this.lado2 + this.lado3;
    }
}
