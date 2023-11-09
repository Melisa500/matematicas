const containerInfo = document.querySelector('.container');
const perimetroDelCuadrado = document.querySelector('.perimetroDelCuadrado');
const areaDelCuadrado = document.querySelector('.areaDelCuadrado');
const perimetroDelTriangulo = document.querySelector('.perimetroDelTriangulo');
const areaDelTriangulo = document.querySelector('.areaDelTriangulo');
const circunsferencia = document.querySelector('.circunferenciaDelCirculo');
const areaDelCirculo = document.querySelector('.areaDelCirculo');
const alturaIsosceles = document.querySelector('.alturaTrianguloIsosceles');
const alturaEscaleno = document.querySelector('.alturaTrianguloEscaleno');

perimetroDelCuadrado.addEventListener('click', perimetroDelCuadradoF);
areaDelCuadrado.addEventListener('click', areaDelCuadradoF);
perimetroDelTriangulo.addEventListener('click', perimetroDelTrianguloF);
areaDelTriangulo.addEventListener('click', areaDelTrianguloF);
circunsferencia.addEventListener('click', circunsferenciaF);
areaDelCirculo.addEventListener('click', areaDelCirculoF);
alturaIsosceles.addEventListener('click', alturaIsoscelesF);
alturaEscaleno.addEventListener('click', alturaEscalenoF);

/* -------Cuadrado------- */

function perimetroDelCuadradoF(e){
    e.preventDefault();

    const pDescripcionPDC = document.createElement('p');
    pDescripcionPDC.classList.add('descriptionPDC');
    pDescripcionPDC.innerText = 'Puedes calcular el perímetro de un cuadrado sumando sus cuatro lados. Como estos son iguales al multiplicarlos por 4 obtienes el mismo resultado.'

    const formulaPDC = document.createElement('span');
    formulaPDC.classList.add('formulaPDC');
    formulaPDC.innerText = ' Lado x 4';

    const figura = document.createElement('div')
    figura.classList.add('cuadrado');

    const containerCode = document.createElement('div')
    containerCode.classList.add('containerCode');
    const code = document.createElement('span');
    code.classList.add('code');
    code.style.whiteSpace = 'pre-line';
    code.textContent = 'const ladoDelCuadrado = 20;\nconst perimetroDelCuadrado = ladoDelCuadrado * 4';

    const operacion = document.createElement('div');
    operacion.classList.add('operacion');
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.classList.add('input');
    const button = document.createElement('button');
    label.classList.add('label');
    label.innerText = 'Calcula el perímetro de un cuadrado  ';
    input.setAttribute('type', 'number');
    input.setAttribute('id', 'number');
    button.innerText = 'Calcular';
    button.addEventListener('click', calcularPerimetroDelCuadrado);

    containerCode.appendChild(code)

    label.appendChild(input);
    operacion.appendChild(label);
    operacion.appendChild(button)

    containerInfo.appendChild(pDescripcionPDC);
    containerInfo.appendChild(formulaPDC);
    containerInfo.appendChild(figura);
    containerInfo.appendChild(containerCode);
    containerInfo.appendChild(operacion);

    perimetroDelCuadrado.removeEventListener('click', perimetroDelCuadradoF)
}

function calcularPerimetroDelCuadrado(){
    const inputValue = document.getElementById('number').value;
    const lado = parseFloat(inputValue);
    const cuadrado = document.querySelector('.cuadrado');

    const resultadoElement = document.querySelector('.resultado');

    if (!isNaN(lado)) {
        const perimetro = lado * 4;

        if (resultadoElement) {
            resultadoElement.innerText = perimetro;
        } else {
            const resultado = document.createElement('p');
            resultado.classList.add('resultado');
            resultado.innerText = perimetro;
            cuadrado.appendChild(resultado);
        }

        console.log('El perímetro del cuadrado es: ' + perimetro);
    } else {
        console.log('Ingresa un valor numérico');
    }


}

function areaDelCuadradoF(e){
    e.preventDefault();

    const pDescripcionPDC = document.createElement('p');
    pDescripcionPDC.classList.add('descriptionPDC');
    pDescripcionPDC.innerText = 'Puedes calcular el área de un cuadrado multiplicando lado por lado.'

    const formulaPDC = document.createElement('span');
    formulaPDC.classList.add('formulaPDC');
    formulaPDC.innerText = ' Lado x Lado';

    const figura = document.createElement('div')
    figura.classList.add('cuadrado');

    const containerCode = document.createElement('div')
    containerCode.classList.add('containerCode');
    const code = document.createElement('span');
    code.classList.add('code');
    code.style.whiteSpace = 'pre-line';
    code.textContent = 'const ladoDelCuadrado = 5;\nconst perimetroDelCuadrado = ladoDelCuadrado * ladoDelCuadrado';

    const operacion = document.createElement('div');
    operacion.classList.add('operacion');

    const label = document.createElement('label');
    const input = document.createElement('input');
    input.classList.add('input');
    label.classList.add('label');
    label.innerText = 'Ingresa el lado del cuadrado  ';
    input.setAttribute('type', 'number');
    input.setAttribute('id', 'number');
    
    const button = document.createElement('button');
    button.innerText = 'Calcular';
    button.addEventListener('click', calcularAreaDelCuadrado);

    containerCode.appendChild(code);

    label.appendChild(input);
    operacion.appendChild(label);
    operacion.appendChild(button);

    containerInfo.appendChild(pDescripcionPDC);
    containerInfo.appendChild(formulaPDC);
    containerInfo.appendChild(figura);
    containerInfo.appendChild(containerCode);
    containerInfo.appendChild(operacion);

    areaDelCuadrado.removeEventListener('click', areaDelCuadradoF);
}

function calcularAreaDelCuadrado(){
    const inputValue = document.getElementById('number').value;
    const lado = parseFloat(inputValue);
    const cuadrado = document.querySelector('.cuadrado');

    const resultadoElement = cuadrado.querySelector('.resultado');

    if (!isNaN(lado)) {
        const area = lado * lado;

        if (resultadoElement) {
            resultadoElement.innerText = area;
        } else {
            const resultado = document.createElement('p');
            resultado.classList.add('resultado');
            resultado.innerText = area;
            cuadrado.appendChild(resultado);
        }
        console.log('El perímetro del cuadrado es: ' + area);
    } else {
        console.log('Ingresa un valor numérico');
    }
} 

/* -------Triangulo------- */

function perimetroDelTrianguloF(e){
    e.preventDefault();

    const pDescripcionPDC = document.createElement('p');
    pDescripcionPDC.classList.add('descriptionPDC');
    pDescripcionPDC.innerText = 'El perímetro de un triángulo es igual a la suma de sus tres lados.'

    const formulaPDC = document.createElement('span');
    formulaPDC.classList.add('formulaPDC');
    formulaPDC.innerText = ' Lado + Lado + Lado';

    const figura = document.createElement('div')
    figura.classList.add('triangulo');

    const containerCode = document.createElement('div')
    containerCode.classList.add('containerCode');
    const code = document.createElement('span');
    code.classList.add('code');
    code.style.whiteSpace = 'pre-line';
    code.textContent = 'const ladoDelTriangulo1 = 3;\nconst ladoDelTriangulo2 = 3;\nconst ladoDelTriangulo3 = 3;\nconst perimetroDelTriangulo = ladoDelTriangulo1 + ladoDelTriangulo2 + ladoDelTriangulo3';

    const operacion = document.createElement('div');
    operacion.classList.add('operacion');

    const label1 = document.createElement('label');
    const input1 = document.createElement('input');
    input1.classList.add('input1');
    label1.classList.add('label1');
    label1.innerText = 'Lado 1 del triángulo';
    input1.setAttribute('type', 'number');
    input1.setAttribute('id', 'number');

    const label2 = document.createElement('label');
    const input2 = document.createElement('input');
    input2.classList.add('input2');
    label2.classList.add('label2');
    label2.innerText = 'Lado 2 del triángulo';
    input2.setAttribute('type', 'number');
    input2.setAttribute('id', 'number');

    const label3 = document.createElement('label');
    const input3 = document.createElement('input');
    input3.classList.add('input3');
    label3.classList.add('label3');
    label3.innerText = 'Lado 3 del triángulo';
    input3.setAttribute('type', 'number');
    input3.setAttribute('id', 'number');

    const button = document.createElement('button');
    button.innerText = 'Calcular';
    button.addEventListener('click', calcularPerimetroDelTriangulo);

    containerCode.appendChild(code)

    label1.appendChild(input1);
    label2.appendChild(input2);
    label3.appendChild(input3);
    operacion.appendChild(label1);
    operacion.appendChild(label2);
    operacion.appendChild(label3);
    operacion.appendChild(button)

    containerInfo.appendChild(pDescripcionPDC);
    containerInfo.appendChild(formulaPDC);
    containerInfo.appendChild(figura);
    containerInfo.appendChild(containerCode);
    containerInfo.appendChild(operacion);

    perimetroDelTriangulo.removeEventListener('click', perimetroDelTrianguloF)
}

function calcularPerimetroDelTriangulo(){
    //const inputValue = document.getElementById('number').value;
    const inputValue1 = document.querySelector('.input1').value
    const inputValue2 = document.querySelector('.input2').value
    const inputValue3 = document.querySelector('.input3').value
    const lado1 = parseFloat(inputValue1);
    const lado2 = parseFloat(inputValue2);
    const lado3 = parseFloat(inputValue3);
    const triangulo = document.querySelector('.triangulo');

    const resultadoElement = triangulo.querySelector('.resultadoTriangulo');

    if (!isNaN(lado1, lado2, lado3)) {
        const perimetro = lado1 + lado2 + lado3;

        if (resultadoElement) {
            resultadoElement.innerText = perimetro;
        } else {
            const resultado = document.createElement('p');
            resultado.classList.add('resultadoTriangulo');
            resultado.innerText = perimetro;
            triangulo.appendChild(resultado);
        }

        console.log('El perímetro del cuadrado es: ' + perimetro);
    } else {
        console.log('Ingresa un valor numérico');
    }


}

function areaDelTrianguloF(e){
    e.preventDefault();

    const pDescripcionPDC = document.createElement('p');
    pDescripcionPDC.classList.add('descriptionPDC');
    pDescripcionPDC.innerText = 'El área de un triángulo es igual a base por altura dividido en 2.'

    const formulaPDC = document.createElement('span');
    formulaPDC.classList.add('formulaPDC');
    formulaPDC.innerText = '(Base * Altura) / 2';

    const figura = document.createElement('div')
    figura.classList.add('triangulo');

    const containerCode = document.createElement('div')
    containerCode.classList.add('containerCode');
    const code = document.createElement('span');
    code.classList.add('code');
    code.style.whiteSpace = 'pre-line';
    code.textContent = 'const base = 3;\nconst altura = 3;\nconst areaDelTriangulo = (base * altura) / 2;';

    const operacion = document.createElement('div');
    operacion.classList.add('operacion');

    const label1 = document.createElement('label');
    const input1 = document.createElement('input');
    input1.classList.add('input1');
    label1.classList.add('label1');
    label1.innerText = 'Base del triángulo';
    input1.setAttribute('type', 'number');
    input1.setAttribute('id', 'number');

    const label2 = document.createElement('label');
    const input2 = document.createElement('input');
    input2.classList.add('input2');
    label2.classList.add('label2');
    label2.innerText = 'Altura del triángulo';
    input2.setAttribute('type', 'number');
    input2.setAttribute('id', 'number');


    const button = document.createElement('button');
    button.innerText = 'Calcular';
    button.addEventListener('click', calcularAreaDelTriangulo);

    containerCode.appendChild(code)

    label1.appendChild(input1);
    label2.appendChild(input2);
    operacion.appendChild(label1);
    operacion.appendChild(label2);
    operacion.appendChild(button)

    containerInfo.appendChild(pDescripcionPDC);
    containerInfo.appendChild(formulaPDC);
    containerInfo.appendChild(figura);
    containerInfo.appendChild(containerCode);
    containerInfo.appendChild(operacion);

    perimetroDelTriangulo.removeEventListener('click', areaDelTrianguloF)
}

function calcularAreaDelTriangulo(){
    const inputValue1 = document.querySelector('.input1').value
    const inputValue2 = document.querySelector('.input2').value
    const base = parseFloat(inputValue1);
    const altura = parseFloat(inputValue2);
    const triangulo = document.querySelector('.triangulo');

    const resultadoElement = triangulo.querySelector('.resultadoTriangulo');

    if (!isNaN(base, altura)) {
        const area = (base * altura) / 2;

        if (resultadoElement) {
            resultadoElement.innerText = area;
        } else {
            const resultado = document.createElement('p');
            resultado.classList.add('resultadoTriangulo');
            resultado.innerText = area;
            triangulo.appendChild(resultado);
        }

        console.log('El perímetro del cuadrado es: ' + area);
    } else {
        console.log('Ingresa un valor numérico');
    }


}

function alturaIsoscelesF(e){
    e.preventDefault();

    const pDescripcionPDC = document.createElement('p');
    pDescripcionPDC.classList.add('descriptionPDC');
    pDescripcionPDC.style.whiteSpace = 'pre-line';
    pDescripcionPDC.innerText = 'Para calcular la altura de un triángulo isósceles:\nUsando el teorema de Pitágoras:\nh = √(a^2 - (b/2)^2)\nUsando trigonometría:\nh = (a/2) * tan(θ/2)\nDonde "a" es la longitud de los lados iguales, "b" es la base del triángulo y θ es el ángulo en la cima del triángulo.'

    const formulaPDC = document.createElement('span');
    formulaPDC.classList.add('formulaPDC');
    formulaPDC.innerText = '(Base * Altura) / 2';

    const figura = document.createElement('div')
    figura.classList.add('triangulo');

    const containerCode = document.createElement('div')
    containerCode.classList.add('containerCode');
    const code = document.createElement('span');
    code.classList.add('code');
    code.style.whiteSpace = 'pre-line';
    code.textContent = 'const ladosEquivalentes = 10;\nconst base = 12;\nconst altura = Math.sqrt( (lado **2) - ( (base ** 2) ) / 4);';

    const operacion = document.createElement('div');
    operacion.classList.add('operacion');

    const label1 = document.createElement('label');
    const input1 = document.createElement('input');
    input1.classList.add('input1');
    label1.classList.add('label1');
    label1.innerText = 'Base del triángulo';
    input1.setAttribute('type', 'number');
    input1.setAttribute('id', 'number');

    const label2 = document.createElement('label');
    const input2 = document.createElement('input');
    input2.classList.add('input2');
    label2.classList.add('label2');
    label2.innerText = 'Lados del triángulo';
    input2.setAttribute('type', 'number');
    input2.setAttribute('id', 'number');

    const nota = document.createElement('p');
    nota.innerText = 'La base de un triangulo'


    const button = document.createElement('button');
    button.innerText = 'Calcular';
    button.addEventListener('click', calcularAlturaIsosceles);

    containerCode.appendChild(code)

    label1.appendChild(input1);
    label2.appendChild(input2);
    operacion.appendChild(label1);
    operacion.appendChild(label2);
    operacion.appendChild(button)

    containerInfo.appendChild(pDescripcionPDC);
    containerInfo.appendChild(formulaPDC);
    containerInfo.appendChild(figura);
    containerInfo.appendChild(containerCode);
    containerInfo.appendChild(operacion);

    alturaIsosceles.removeEventListener('click', alturaIsoscelesF)
}

function calcularAlturaIsosceles(){
    const inputValue1 = document.querySelector('.input1').value
    const inputValue2 = document.querySelector('.input2').value
    const base = parseFloat(inputValue1);
    const altura = parseFloat(inputValue2);
    const triangulo = document.querySelector('.triangulo');

    const resultadoElement = triangulo.querySelector('.resultadoTriangulo');

    if (!isNaN(base) && !isNaN(altura)) {
        //const area = (base * altura) / 2;
        function alturaIsosceles(base, lado) {
            if(base === lado){
                console.log('no es triangulo isosceles')
            } else {
                return Math.sqrt((lado ** 2) - ((base ** 2) / 4));
            }
        }

        const resultadoAltura = alturaIsosceles(base, altura)

        if (resultadoElement) {
            resultadoElement.innerText = resultadoAltura;
        } else {
            const resultado = document.createElement('p');
            resultado.classList.add('resultadoTriangulo');
            resultado.innerText = resultadoAltura.toFixed(2);
            triangulo.appendChild(resultado);
        }

        console.log( resultadoAltura);
    } else {
        console.log('Ingresa un valor numérico');
    }
}

function alturaEscalenoF(e){
    e.preventDefault();

    const pDescripcionPDC = document.createElement('p');
    pDescripcionPDC.classList.add('descriptionPDC');
    pDescripcionPDC.style.whiteSpace = 'pre-line';
    pDescripcionPDC.innerText = 'En el caso de que sólo tengamos los lados del triangulo vamos a calcular el semiperimetro\ns = (a + b + c)/2\nLuego sacamos el área\narea = RaizCuadradaDe(s*(s-base)*(s-lado1)*(s-lado))\nLuego calculamos la altura\naltura = (2 * area) / base';

    const formulaPDC = document.createElement('span');
    formulaPDC.classList.add('formulaPDC');
    formulaPDC.innerText = 's = (a + b + c)/2\narea = RaizCuadradaDe(s*(s-base)*(s-lado1)*(s-lado))\naltura = (2 * area) / base';

    const figura = document.createElement('div')
    figura.classList.add('triangulo');

    const containerCode = document.createElement('div')
    containerCode.classList.add('containerCode');
    const code = document.createElement('span');
    code.classList.add('code');
    code.style.whiteSpace = 'pre-line';
    code.textContent = 'const s = (base + ladoB + ladoC) / 2;\nconst area = Math.sqrt(s * (s - base) * (s - ladoB) * (s - ladoC));\nconst altura = ((2 * area) / base);';

    const operacion = document.createElement('div');
    operacion.classList.add('operacion');

    const labelA = document.createElement('label');
    const inputA = document.createElement('input');
    inputA.classList.add('inputA');
    labelA.classList.add('labelA');
    labelA.innerText = 'Lado 1 del triángulo (BASE)';
    inputA.setAttribute('type', 'number');
    inputA.setAttribute('id', 'number');

    const labelB = document.createElement('label');
    const inputB = document.createElement('input');
    inputB.classList.add('inputB');
    labelB.classList.add('labelB');
    labelB.innerText = 'Lado 2 del triángulo';
    inputB.setAttribute('type', 'number');
    inputB.setAttribute('id', 'number');

    const labelC = document.createElement('label');
    const inputC = document.createElement('input');
    inputC.classList.add('inputC');
    labelC.classList.add('labelC');
    labelC.innerText = 'Lado 3 del triángulo';
    inputC.setAttribute('type', 'number');
    inputC.setAttribute('id', 'number');

    const button = document.createElement('button');
    button.innerText = 'Calcular';
    button.addEventListener('click', calcularAlturaEscaleno);

    containerCode.appendChild(code)

    labelA.appendChild(inputA);
    labelB.appendChild(inputB);
    labelC.appendChild(inputC);
    operacion.appendChild(labelA);
    operacion.appendChild(labelB);
    operacion.appendChild(labelC);
    operacion.appendChild(button)

    containerInfo.appendChild(pDescripcionPDC);
    containerInfo.appendChild(formulaPDC);
    containerInfo.appendChild(figura);
    containerInfo.appendChild(containerCode);
    containerInfo.appendChild(operacion);

    alturaIsosceles.removeEventListener('click', alturaEscalenoF)
}

function calcularAlturaEscaleno(){
    const inputValue1 = document.querySelector('.inputA').value
    const inputValue2 = document.querySelector('.inputB').value
    const inputValue3 = document.querySelector('.inputC').value
    const ladoA = parseFloat(inputValue1);
    const ladoB = parseFloat(inputValue2);
    const ladoC = parseFloat(inputValue3);
    const triangulo = document.querySelector('.triangulo');

    const resultadoElement = triangulo.querySelector('.resultadoTriangulo');

    if (!isNaN(ladoA) && !isNaN(ladoB) && !isNaN(ladoC)) {

        const s = (ladoA + ladoB + ladoC) / 2;

        const area = Math.sqrt(s * (s - ladoA) * (s - ladoB) * (s - ladoC));

        const altura = ((2 * area) / ladoA);
        const resultadoAltura = area.toFixed(3)

        console.log(resultadoAltura)

        if (resultadoElement) {
            resultadoElement.innerText = resultadoAltura;
        } else {
            const resultado = document.createElement('p');
            resultado.classList.add('resultadoTriangulo');
            resultado.innerText = resultadoAltura
            triangulo.appendChild(resultado);
        }

    } else {
        console.log('Ingresa un valor numérico');
    }
}

/* -------Circulo------- */

function circunsferenciaF(e){
    e.preventDefault();

    const pDescripcionPDC = document.createElement('p');
    pDescripcionPDC.classList.add('descriptionPDC');
    pDescripcionPDC.innerText = 'Para calcular la circunferencia de un círculo debemos multiplicar el diámetro del mismo por PI .'

    const formulaPDC = document.createElement('span');
    formulaPDC.classList.add('formulaPDC');
    formulaPDC.innerText = 'Diámetro * PI';

    const figura = document.createElement('div')
    figura.classList.add('circulo');

    const containerCode = document.createElement('div')
    containerCode.classList.add('containerCode');
    const code = document.createElement('span');
    code.classList.add('code');
    code.style.whiteSpace = 'pre-line';
    code.textContent = 'const diametro = 20;\nconst circunferencia = diametro * Math.PI.toFixed(3);';

    const operacion = document.createElement('div');
    operacion.classList.add('operacion');

    const label = document.createElement('label');
    const input = document.createElement('input');
    input.classList.add('input');
    label.classList.add('label');
    label.innerText = 'Diámetro del círculo';
    input.setAttribute('type', 'number');
    input.setAttribute('id', 'number');

    const button = document.createElement('button');
    button.innerText = 'Calcular';
    button.addEventListener('click', calcularCircunferencia);

    containerCode.appendChild(code)

    label.appendChild(input);
    operacion.appendChild(label);
    operacion.appendChild(button)

    containerInfo.appendChild(pDescripcionPDC);
    containerInfo.appendChild(formulaPDC);
    containerInfo.appendChild(figura);
    containerInfo.appendChild(containerCode);
    containerInfo.appendChild(operacion);

    circunsferencia.removeEventListener('click', circunsferenciaF)
}

function calcularCircunferencia(){
    const inputValue = document.querySelector('.input').value
    const diametro = parseFloat(inputValue);
    const circulo = document.querySelector('.circulo');

    const resultadoElement = circulo.querySelector('.resultadoCirculo');

    if (!isNaN(diametro)) {
        const pi = Math.PI.toFixed(3)
        const circunferencia = diametro * pi;

        if (resultadoElement) {
            resultadoElement.innerText = circunferencia.toFixed(3);
        } else {
            const resultado = document.createElement('p');
            resultado.classList.add('resultadoCirculo');
            resultado.innerText = circunferencia.toFixed(3);
            circulo.appendChild(resultado);
        }

        console.log('El perímetro del cuadrado es: ' + circunferencia);
    } else {
        console.log('Ingresa un valor numérico');
    }
}

function areaDelCirculoF(e){
    e.preventDefault();

    const pDescripcionPDC = document.createElement('p');
    pDescripcionPDC.classList.add('descriptionPDC');
    pDescripcionPDC.innerText = 'Calculamos el área de un círculo multiplicando el radio al cuadrado por PI.'

    const formulaPDC = document.createElement('span');
    formulaPDC.classList.add('formulaPDC');
    formulaPDC.innerText = 'Radio² * PI';

    const figura = document.createElement('div')
    figura.classList.add('circulo');

    const containerCode = document.createElement('div')
    containerCode.classList.add('containerCode');
    const code = document.createElement('span');
    code.classList.add('code');
    code.style.whiteSpace = 'pre-line';
    code.textContent = 'const radio = 6;\nconst areaDelCirculo = Math.pow(radio, 2) * Math.PI;';

    const operacion = document.createElement('div');
    operacion.classList.add('operacion');

    const label = document.createElement('label');
    const input = document.createElement('input');
    input.classList.add('input');
    label.classList.add('label');
    label.innerText = 'Radio del círculo';
    input.setAttribute('type', 'number');
    input.setAttribute('id', 'number');

    const button = document.createElement('button');
    button.innerText = 'Calcular';
    button.addEventListener('click', calcularAreaDelCirculo);

    containerCode.appendChild(code)

    label.appendChild(input);
    operacion.appendChild(label);
    operacion.appendChild(button)

    containerInfo.appendChild(pDescripcionPDC);
    containerInfo.appendChild(formulaPDC);
    containerInfo.appendChild(figura);
    containerInfo.appendChild(containerCode);
    containerInfo.appendChild(operacion);

    circunsferencia.removeEventListener('click', areaDelCirculoF)
}

function calcularAreaDelCirculo(){
    const inputValue = document.querySelector('.input').value
    const radio = parseFloat(inputValue);
    const circulo = document.querySelector('.circulo');

    const resultadoElement = circulo.querySelector('.resultadoCirculo');

    if (!isNaN(radio)) {
        //const pi = Math.PI.toFixed(3)
        const areaDelCirculo = Math.pow(radio, 2) * Math.PI.toFixed(1);

        if (resultadoElement) {
            resultadoElement.innerText = areaDelCirculo.toFixed(1);
        } else {
            const resultado = document.createElement('p');
            resultado.classList.add('resultadoCirculo');
            resultado.innerText = areaDelCirculo.toFixed(3);
            circulo.appendChild(resultado);
        }

        console.log('El perímetro del cuadrado es: ' + areaDelCirculo);
    } else {
        console.log('Ingresa un valor numérico');
    }
}




