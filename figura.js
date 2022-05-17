//Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado= 5; 
//console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm " );

function perimetroCuadrado(lado) {
  return lado * 4;
}

//const perimetroCuadrado = ladoCuadrado * 4;
//console.log("El perímetro del cuadrado es : " + perimetroCuadrado + "cm " );

function areaCuadrado(lado) {
  return lado * lado;
}

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El area del cuadrado es : " + areaCuadrado + "cm^2 " );
console.groupEnd();
//Código del triángilo
console.group("Triangulos")
//const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log("los lados del Triángulo miden : " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm ");
// console.log("La altura de el Triángulo es : " + alturaTriangulo + "cm^2 " );
// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2+ baseTriangulo;
// console.log("El perímetro del Triángulo es : " + perimetroTriangulo + "cm " );
// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log ("El area del triángulo es: "  + areaTriangulo + "cm ") ;
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
};
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
};

console.groupEnd();
//Código del círculo
console.group("Circulos")
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm ");
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del círculo es: " + diametroCirculo + "cm ");
// const PI = Math. PI;
// console.log("PI es: " + PI + "cm ");
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perímetro del círculo es: " + perimetroCirculo + "cm")
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El area del círculo es: " + areaCirculo + "cm^2"); 
function diametroCirculo(radio) {
  return radio * 2;
}
const PI = Math.PI;
console.log("PI es: " + PI + "cm ");
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
function areaCirculo(radio) {
  return (radio * radio) * PI;
}
console.groupEnd();

function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area);
}
function calcularDiametroCirculo() {
  const input = document.getElementById("inputCirculo");
  const value = input.value;
  const diametro = diametroCirculo(value);
  alert(diametro);
}
function calcularAreaCirculo() {
  const input = document.getElementById("inputCirculo");
  const value = input.value;
  const area = areaCirculo(value);
  alert(area);
}
function calcularperimetroCirculo() {
  const input = document.getElementById("inputCirculo");
  const value = input.value;
  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}

function calcularperimetroTriangulo() {
  const inputA = document.getElementById("inputA");
  const lado1 = Number(inputA.value);
  const inputB = document.getElementById("inputB");
  const lado2 = Number(inputB.value);
  const inputBase = document.getElementById("inputBase")
  const base = Number(inputBase.value);
  const perimetro = perimetroTriangulo(lado1, lado2, base);
  alert("El perímetro del triangulo es: " + perimetro);
}
function calcularareaTriangulo() {
  const inputA = document.getElementById("inputA");
  const lado1 = Number(inputA.value);
  const inputB = document.getElementById("inputB");
  const lado2 = Number(inputB.value);
  const inputBase = document.getElementById("inputBase")
  const base = Number(inputBase.value);
  const area = areaTriangulo(lado1, lado2, base);
  alert("El área del triangulo es: " + area);
}
function alturaTrianguloIsosceles(ladoA, ladoB, ladoBase) {
  if (ladoA != ladoB) {
      console.error("Los lados a y b no son iguales");
  } else {
      // ...
  }
}
function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
  if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
      console.error("Los lados a y b no son iguales");
  } else {
      const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
      const trianguloPequenoLadoBase = trianguloGrandeLadoA;

      const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
      const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

      const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

      const trianguloGrandeAltura = trianguloPequenoLadoA;
      return trianguloGrandeAltura;
  }
}
