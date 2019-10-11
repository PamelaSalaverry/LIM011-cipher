//Llamo a los botones y cajas de texto
const ingresar = document.getElementById("inicio");
const message = document.getElementById("message");
const offset = document.getElementById ("offset");
const bEncoder = document.getElementById("encoder");
const bDecoder = document.getElementById("decoder");
const limpiar = document.getElementById("limpiar");
const codedMessage = document.getElementById("codedMessage");

message.classList.add("hide");
offset.classList.add("hide");
bEncoder.classList.add("hide");
bDecoder.classList.add("hide");
limpiar.classList.add("hide");
codedMessage.classList.add("hide");

ingresar.addEventListener("click", () =>{

	ingresar.classList.add("hide");
	bEncoder.classList.remove("hide");
	bDecoder.classList.remove("hide");
	message.classList.remove("hide");
	codedMessage.classList.remove("hide");
	limpiar.classList.remove("hide");
	offset.classList.remove("hide");

	bEncoder.addEventListener("click", () =>{
	let mensajeIngreso = document.getElementById("message").value;
	let clave = document.getElementById("offset").value;
	codedMessage.innerHTML = cipher.encode(clave, mensajeIngreso);
	}),

	bDecoder.addEventListener("click", () =>{
	let mensajeSalida = document.getElementById("message").value;
	let clave = document.getElementById("offset").value;
	codedMessage.innerHTML= cipher.decode(clave, mensajeSalida);
	}),

	limpiar.addEventListener("click", () =>{
	codedMessage.innerHTML = "";
	})

})
