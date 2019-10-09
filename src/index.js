//Llamo a los botones y cajas de texto
const ingresar = document.getElementById("inicio");
const bEncoder = document.getElementById("encoder");
const bDecoder = document.getElementById("decoder");
const finalText = document.getElementById("codedMessage");
const message = document.getElementById("message")
const codedMessage = document.getElementById("codedMessage")
bEncoder.addEventListener("click", () =>{
	let mensajeIngreso = document.getElementById("message").value;
	let clave = document.getElementById("offset").value;
	cipher.encode(clave, mensajeIngreso);
})

bDecoder.addEventListener("click", () =>{
	// let mensajeIngreso = document.getElementById("message").value;
	let mensajeSalida = document.getElementById("codedMessage").value;
	let clave = document.getElementById("offset").value;
	cipher.decode(clave, mensajeSalida);
})