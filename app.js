class Figura {
    area() {
        throw "Método 'area' debe ser implementado";
    }
    
    perimetro() {
        throw "Método 'perimetro' debe ser implementado";
    }
}

class Rectangulo extends Figura {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    area() {
        return this.base * this.altura;
    }

    perimetro() {
        return 2 * (this.base + this.altura);
    }
}

class Cuadrado extends Figura {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    area() {
        return this.lado * this.lado;
    }

    perimetro() {
        return 4 * this.lado;
    }
}

class Circulo extends Figura {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    area() {
        return Math.PI * Math.pow(this.radio, 2);
    }

    perimetro() {
        return 2 * Math.PI * this.radio;
    }
}

class Triangulo extends Figura {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    area() {
        return (this.base * this.altura) / 2;
    }

    perimetro() {
        return this.base + 2 * Math.sqrt(Math.pow(this.base / 2, 2) + Math.pow(this.altura, 2));
    }
}

document.getElementById('btnSeleccionar').addEventListener('click', function() {
    const seleccion = document.getElementById('figura').value;
    const formularios = document.querySelectorAll('.formulario');
    const img = document.getElementById('figuraImg');
    formularios.forEach(formulario => formulario.style.display = 'none');

    switch (seleccion) {
        case 'rectangulo':
            img.src = 'imagenes/Rectangulo.webp'; // Ruta de la imagen del rectángulo
            img.alt = 'Rectángulo';
            img.style.display = 'block';
            document.getElementById('frmRectangulo').style.display = 'block';
            break;
        case 'cuadrado':
            img.src = 'imagenes/Cuadrado.webp'; // Ruta de la imagen del cuadrado
            img.alt = 'Cuadrado';
            img.style.display = 'block';
            document.getElementById('frmCuadrado').style.display = 'block';
            break;
        case 'circulo':
            img.src = 'imagenes/circulo.webp'; // Ruta de la imagen del círculo
            img.alt = 'Círculo';
            img.style.display = 'block';
            document.getElementById('frmCirculo').style.display = 'block';
            break;
        case 'triangulo':
            img.src = 'imagenes/triangulo-area-geometria-e1566153523781.webp'; // Ruta de la imagen del triángulo
            img.alt = 'Triángulo';
            img.style.display = 'block';
            document.getElementById('frmTriangulo').style.display = 'block';
            break;
        default:
            img.style.display = 'none';
            break;
    }
});

document.getElementById('btnCalcularRectangulo').addEventListener('click', function() {
    const base = parseFloat(document.getElementById('txtBase').value);
    const altura = parseFloat(document.getElementById('txtAltura').value);

    if (isNaN(base) || isNaN(altura)) {
        alert('Por favor ingresa valores numéricos válidos');
        return;
    }

    const rectangulo = new Rectangulo(base, altura);
    const resultado = `
        Área: ${rectangulo.area().toFixed(2)}<br>
        Perímetro: ${rectangulo.perimetro().toFixed(2)}
    `;
    document.getElementById('resultadoRectangulo').innerHTML = resultado;
});

document.getElementById('btnCalcularCuadrado').addEventListener('click', function() {
    const lado = parseFloat(document.getElementById('txtLado').value);

    if (isNaN(lado)) {
        alert('Por favor ingresa un valor numérico válido');
        return;
    }

    const cuadrado = new Cuadrado(lado);
    const resultado = `
        Área: ${cuadrado.area().toFixed(2)}<br>
        Perímetro: ${cuadrado.perimetro().toFixed(2)}
    `;
    document.getElementById('resultadoCuadrado').innerHTML = resultado;
});

document.getElementById('btnCalcularCirculo').addEventListener('click', function() {
    const radio = parseFloat(document.getElementById('txtRadio').value);

    if (isNaN(radio)) {
        alert('Por favor ingresa un valor numérico válido');
        return;
    }

    const circulo = new Circulo(radio);
    const resultado = `
        Área: ${circulo.area().toFixed(2)}<br>
        Perímetro: ${circulo.perimetro().toFixed(2)}
    `;
    document.getElementById('resultadoCirculo').innerHTML = resultado;
});

document.getElementById('btnCalcularTriangulo').addEventListener('click', function() {
    const base = parseFloat(document.getElementById('txtBaseTriangulo').value);
    const altura = parseFloat(document.getElementById('txtAlturaTriangulo').value);

    if (isNaN(base) || isNaN(altura)) {
        alert('Por favor ingresa valores numéricos válidos');
        return;
    }

    const triangulo = new Triangulo(base, altura);
    const resultado = `
        Área: ${triangulo.area().toFixed(2)}<br>
        Perímetro: ${triangulo.perimetro().toFixed(2)}
    `;
    document.getElementById('resultadoTriangulo').innerHTML = resultado;
});

