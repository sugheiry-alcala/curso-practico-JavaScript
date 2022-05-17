//const precioOriginal = 100;
//const descuento = 15;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function onClickButtonPriceDiscount(event) {
  event.preventDefault();
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;
  const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
  const resultP = document.getElementById("ResultP");

  resultP.innerText = `El precio con descuento son: $${precioConDescuento}`;
}

/*
const cupones = ['abc','bca']

if(!cupones.includes('abc')){
  alert(`el cupon ${'abc'} no es un cupon valido`)
}
*/

// ESTE
/*
const cupones = [
  {
    name: 'abc',
    value: 20,
  },
  {
    name: 'bca',
    value: 50,
  },
  {
    name: 'zzz',
    value: 15
  }
];

const cupon = cupones.find((cupon)=> cupon.name === 'abc');

if (!cupon){
  alert(`el cupon ${'abasdassdasdc'} no es un cupon valido`);
}
*/

document.getElementById('button-price-discount').addEventListener('click', onClickButtonPriceDiscount);
//console.log({
//  precioOriginal,
//descuento,
//  porcentajePrecioConDescuento,
//  precioConDescuento,
//})