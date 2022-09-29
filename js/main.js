let carrito = [];

//Capturo datos para luego agregar eventos

const btnAgregarMate1 = document.getElementById("AgregarMate1");
const btnAgregarMate2 = document.getElementById("AgregarMate2");
const btnAgregarMate3 = document.getElementById("AgregarMate3");
const btnAgregarMate4 = document.getElementById("AgregarMate4");
const btnAgregarMate5 = document.getElementById("AgregarMate5");
const btnAgregarMate6 = document.getElementById("AgregarMate6");
const btnAgregarMate7 = document.getElementById("AgregarMate7");
const btnAgregarMate8 = document.getElementById("AgregarMate8");
const btnAgregarMate9 = document.getElementById("AgregarMate9");


const mostrarMate = document.getElementById("VerMate");

//Agrego evento a los botones

btnAgregarMate1.addEventListener("click",()=>{
    alert("Producto agregado con exito al carrito!");
    carrito.push(productos[0]);
    console.log(carrito);
});

btnAgregarMate2.addEventListener("click",()=>{
    alert("Producto agregado con exito al carrito!");
    carrito.push(productos[3]);
});
btnAgregarMate3.addEventListener("click",()=>{
    alert("Producto agregado con exito al carrito!");
    carrito.push(productos[6]);
});
btnAgregarMate4.addEventListener("click",()=>{
    alert("Producto agregado con exito al carrito!");
    carrito.push(productos[1]);
});

btnAgregarMate5.addEventListener("click",()=>{
    alert("Producto agregado con exito al carrito!");
    carrito.push(productos[4]);
});
btnAgregarMate6.addEventListener("click",()=>{
    alert("Producto agregado con exito al carrito!");
    carrito.push(productos[7]);
});
btnAgregarMate7.addEventListener("click",()=>{
    alert("Producto agregado con exito al carrito!");
    carrito.push(productos[2]);
});

btnAgregarMate8.addEventListener("click",()=>{
    alert("Producto agregado con exito al carrito!");
    carrito.push(productos[5]);
});
btnAgregarMate9.addEventListener("click",()=>{
    alert("Producto agregado con exito al carrito!");
    carrito.push(productos[8]);
});





//funcion para mostrar carrito en seccion compra

const mostrarCompra = ()=>{
   const mates = document.getElementById("muestraMate");
   
   mates.innerHTML = carrito;
}
