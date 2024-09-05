function mostrarFormulario() {
    const seleccion = document.getElementById('figura-select').value;
    const contenedor = document.getElementById('formulario-contenedor');
    const imagenFigura = document.getElementById('imagen-figura');

    contenedor.innerHTML = ''; // Limpiar el contenedor

    let imagePath = '';

    if (seleccion === 'rectangulo') {
        contenedor.innerHTML = `
            <div class="formulario">
                <h2>Rectángulo</h2>
                <label for="base-rectangulo">Base:</label>
                <input type="number" id="base-rectangulo" step="any" placeholder="Ingrese la base">
                <label for="altura-rectangulo">Altura:</label>
                <input type="number" id="altura-rectangulo" step="any" placeholder="Ingrese la altura">
                <button onclick="calcularRectangulo()">Calcular Rectángulo</button>
                <p id="resultado-rectangulo"></p>
            </div>
        `;
        imagePath = 'imagenes/Rectangulo.webp';
    } else if (seleccion === 'cuadrado') {
        contenedor.innerHTML = `
            <div class="formulario">
                <h2>Cuadrado</h2>
                <label for="lado-cuadrado">Lado:</label>
                <input type="number" id="lado-cuadrado" step="any" placeholder="Ingrese el lado">
                <button onclick="calcularCuadrado()">Calcular Cuadrado</button>
                <p id="resultado-cuadrado"></p>
            </div>
        `;
        imagePath = 'imagenes/Cuadrado.webp';
    } else if (seleccion === 'circulo') {
        contenedor.innerHTML = `
            <div class="formulario">
                <h2>Círculo</h2>
                <label for="radio-circulo">Radio:</label>
                <input type="number" id="radio-circulo" step="any" placeholder="Ingrese el radio">
                <button onclick="calcularCirculo()">Calcular Círculo</button>
                <p id="resultado-circulo"></p>
            </div>
        `;
        imagePath = 'imagenes/circulo.webp';
    } else if (seleccion === 'triangulo') {
        contenedor.innerHTML = `
            <div class="formulario">
                <h2>Triángulo</h2>
                <label for="tipo-triangulo">Tipo de Triángulo:</label>
                <select id="tipo-triangulo" onchange="mostrarCamposTriangulo()">
                    <option value="">Seleccione</option>
                    <option value="equilatero">Equilátero</option>
                    <option value="isosceles">Isósceles</option>
                    <option value="escaleno">Escaleno</option>
                </select>
                <div id="campos-triangulo">
                    <!-- Campos específicos del triángulo se cargarán aquí -->
                </div>
                <button onclick="calcularTriangulo()">Calcular Triángulo</button>
                <p id="resultado-triangulo"></p>
            </div>
        `;
        imagePath = 'imagenes/tipos-de-triangulos-segun-lados-cke.webp';
    }

    imagenFigura.src = imagePath;
    imagenFigura.style.display = imagePath ? 'block' : 'none';
}

function mostrarCamposTriangulo() {
    const tipo = document.getElementById('tipo-triangulo').value;
    const contenedor = document.getElementById('campos-triangulo');

    let camposHTML = '';

    if (tipo === 'equilatero') {
        camposHTML = `
            <label for="lado-triangulo-eq">Lado:</label>
            <input type="number" id="lado-triangulo-eq" step="any" placeholder="Ingrese el lado">
        `;
    } else if (tipo === 'isosceles') {
        camposHTML = `
            <label for="lado-base-isosceles">Base:</label>
            <input type="number" id="lado-base-isosceles" step="any" placeholder="Ingrese la base">
            <label for="lado-igual-isosceles">Lados Iguales:</label>
            <input type="number" id="lado-igual-isosceles" step="any" placeholder="Ingrese los lados iguales">
        `;
    } else if (tipo === 'escaleno') {
        camposHTML = `
            <label for="lado1-escaleno">Lado 1:</label>
            <input type="number" id="lado1-escaleno" step="any" placeholder="Ingrese el lado 1">
            <label for="lado2-escaleno">Lado 2:</label>
            <input type="number" id="lado2-escaleno" step="any" placeholder="Ingrese el lado 2">
            <label for="lado3-escaleno">Lado 3:</label>
            <input type="number" id="lado3-escaleno" step="any" placeholder="Ingrese el lado 3">
        `;
    }

    contenedor.innerHTML = camposHTML;
}

function calcularRectangulo() {
    const base = parseFloat(document.getElementById('base-rectangulo').value);
    const altura = parseFloat(document.getElementById('altura-rectangulo').value);
    
    if (isNaN(base) || isNaN(altura)) {
        document.getElementById('resultado-rectangulo').innerText = 'Por favor, ingrese valores válidos.';
        return;
    }
    
    const rectangulo = new Rectangulo(base, altura);
    const area = rectangulo.calcularArea();
    const perimetro = rectangulo.calcularPerimetro();
    document.getElementById('resultado-rectangulo').innerText = `Área: ${area.toFixed(2)}, Perímetro: ${perimetro.toFixed(2)}`;
}

function calcularCuadrado() {
    const lado = parseFloat(document.getElementById('lado-cuadrado').value);
    
    if (isNaN(lado)) {
        document.getElementById('resultado-cuadrado').innerText = 'Por favor, ingrese un valor válido.';
        return;
    }
    
    const cuadrado = new Cuadrado(lado);
    const area = cuadrado.calcularArea();
    const perimetro = cuadrado.calcularPerimetro();
    document.getElementById('resultado-cuadrado').innerText = `Área: ${area.toFixed(2)}, Perímetro: ${perimetro.toFixed(2)}`;
}

function calcularCirculo() {
    const radio = parseFloat(document.getElementById('radio-circulo').value);
    
    if (isNaN(radio)) {
        document.getElementById('resultado-circulo').innerText = 'Por favor, ingrese un valor válido.';
        return;
    }
    
    const circulo = new Circulo(radio);
    const area = circulo.calcularArea();
    const perimetro = circulo.calcularPerimetro();
    document.getElementById('resultado-circulo').innerText = `Área: ${area.toFixed(2)}, Perímetro: ${perimetro.toFixed(2)}`;
}

function calcularTriangulo() {
    const tipoTriangulo = document.getElementById('tipo-triangulo').value;
    let area, perimetro;

    if (tipoTriangulo === 'equilatero') {
        const lado = parseFloat(document.getElementById('lado-triangulo-eq').value);

        if (isNaN(lado)) {
            document.getElementById('resultado-triangulo').innerText = 'Por favor, ingrese un valor válido.';
            return;
        }
        
        const trianguloEq = new TrianguloEquilatero(lado);
        area = trianguloEq.calcularArea();
        perimetro = trianguloEq.calcularPerimetro();
    } else if (tipoTriangulo === 'isosceles') {
        const base = parseFloat(document.getElementById('lado-base-isosceles').value);
        const ladoIgual = parseFloat(document.getElementById('lado-igual-isosceles').value);

        if (isNaN(base) || isNaN(ladoIgual)) {
            document.getElementById('resultado-triangulo').innerText = 'Por favor, ingrese valores válidos.';
            return;
        }
        
        const trianguloIsosceles = new TrianguloIsosceles(base, ladoIgual);
        area = trianguloIsosceles.calcularArea();
        perimetro = trianguloIsosceles.calcularPerimetro();
    } else if (tipoTriangulo === 'escaleno') {
        const lado1 = parseFloat(document.getElementById('lado1-escaleno').value);
        const lado2 = parseFloat(document.getElementById('lado2-escaleno').value);
        const lado3 = parseFloat(document.getElementById('lado3-escaleno').value);

        if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
            document.getElementById('resultado-triangulo').innerText = 'Por favor, ingrese valores válidos.';
            return;
        }

        // Fórmula de Herón para calcular el área del triángulo escaleno
        const semiPerimetro = (lado1 + lado2 + lado3) / 2;
        const areaEscaleno = Math.sqrt(semiPerimetro * (semiPerimetro - lado1) * (semiPerimetro - lado2) * (semiPerimetro - lado3));
        const perimetroEscaleno = lado1 + lado2 + lado3;

        area = areaEscaleno;
        perimetro = perimetroEscaleno;
    } else {
        document.getElementById('resultado-triangulo').innerText = 'Tipo de triángulo no válido.';
        return;
    }

    document.getElementById('resultado-triangulo').innerText = `Área: ${area.toFixed(2)}, Perímetro: ${perimetro.toFixed(2)}`;
}
