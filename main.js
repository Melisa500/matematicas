const containerInfo = document.querySelector('.container');
const perimetroDelCuadrado = document.querySelector('.perimetroDelCuadrado');
const areaDelCuadrado = document.querySelector('.areaDelCuadrado');
const perimetroDelTriangulo = document.querySelector('.perimetroDelTriangulo');

perimetroDelCuadrado.addEventListener('click', perimetroDelCuadradoF);
areaDelCuadrado.addEventListener('click', areaDelCuadradoF);
perimetroDelTriangulo.addEventListener('click', perimetroDelTrianguloF);


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




