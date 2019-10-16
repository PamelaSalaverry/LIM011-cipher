//Llamo a los botones y cajas de texto
const inicio = document.getElementById("inicio");
const pantallaCodificar = document.getElementById("pantallaCodificar");
const pantallaDecodificar = document.getElementById("pantallaDecodificar");
const nombreVictima = document.getElementById("nombreVictima");
const nombreAgresor = document.getElementById("nombreAgresor");
const offsetCodificar = document.getElementById("offsetCodificar");
const testimonio = document.getElementById("testimonio");
const encoder = document.getElementById("encoder");
const nombreVictimaCodificada = document.getElementById("nombreVictimaCodificada");
const nombreAgresorCodificado = document.getElementById("nombreAgresorCodificado");
const testimonioCodificado = document.getElementById("testimonioCodificado");
const save = document.getElementById("save");
const nombreVictimaCodificada_1 = document.getElementById("nombreVictimaCodificada-1");
const nombreAgresorCodificado_1 = document.getElementById("nombreAgresorCodificado-1");
const offsetDecodificar = document.getElementById("offsetDecodificar");
const testimonioCodificado_1 = document.getElementById("testimonioCodificado-1");
const nombreVictima_1 = document.getElementById("nombreVictima-1");
const nombreAgresor_1 = document.getElementById("nombreAgresor-1");
const testimonio_1 = document.getElementById("testimonio-1");
const backHome = document.getElementById("backHome");
const regresarHome = document.getElementById("regresarHome");
const regresarCodificar = document.getElementById("regresarCodificar");
const regresarHome_1 = document.getElementById("regresarHome-1");
const regresarDecodificar = document.getElementById("regresarDecodificar");
// Oculto pantallas
document.getElementById("home").classList.add("hide");
document.getElementById("functionEncode").classList.add("hide");
document.getElementById("codedScreen").classList.add("hide");
document.getElementById("functionDecode").classList.add("hide");
document.getElementById("decodedScreen").classList.add("hide");
// Llamo a funciones
inicio.addEventListener("click", () =>{
	// Oculto pantallas
	document.getElementById("presentation").classList.add("hide");
	document.getElementById("home").classList.remove("hide");
	// Entro a la pantalla codificar
	pantallaCodificar.addEventListener("click", ()=>{
		// Oculto pantallas
		document.getElementById("home").classList.add("hide");
		document.getElementById("functionEncode").classList.remove("hide");
		// Limpio valores
		nombreVictima.value = "";
		nombreAgresor.value ="";
		testimonio.value ="";
		// Creo primer boton retroceso
		regresarHome.addEventListener("click", () => {
			document.getElementById("functionEncode").classList.add("hide");
			document.getElementById("home").classList.remove("hide")
		})
		// Llamo a la funcion codificar
		encoder.addEventListener("click", () => {
			let clave = offsetCodificar.value;
			nombreVictimaCodificada.value = cipher.encode(clave, nombreVictima.value);
			nombreAgresorCodificado.value = cipher.encode(clave, nombreAgresor.value);
			testimonioCodificado.value = cipher.encode(clave, testimonio.value);
			// Oculto pantallas
			document.getElementById("functionEncode").classList.add("hide");
			document.getElementById("codedScreen").classList.remove("hide");
			// Archivo datos y vuelvo al inicio
			save.addEventListener("click", () =>{
				alert('Testimonio guardado')
				document.getElementById("codedScreen").classList.add("hide");
				document.getElementById("home").classList.remove("hide");
			}),
			// Creo segundo boton retroceso
			regresarCodificar.addEventListener("click", () => {
				document.getElementById("codedScreen").classList.add("hide");
				document.getElementById("functionEncode").classList.remove("hide")
			})
		})
	}),
	// Entro a la pantalla decodificar
	pantallaDecodificar.addEventListener("click", ()=>{
		// Oculto pantallas
		document.getElementById("home").classList.add("hide");
		document.getElementById("functionDecode").classList.remove("hide")
		// Limpio valores
		nombreVictimaCodificada_1.value = "";
		nombreAgresorCodificado_1.value ="";
		testimonioCodificado_1.value ="";
		// Creo tercer boton de retroceso
		regresarHome_1.addEventListener("click", () => {
			document.getElementById("functionDecode").classList.add("hide");
			document.getElementById("home").classList.remove("hide")
		})
		// Llamo a la funcion decodificar
		document.getElementById("decoder").addEventListener("click", ()=>{
			let clave = offsetDecodificar.value;
			nombreVictima_1.value = cipher.decode(clave, nombreVictimaCodificada_1.value);
			nombreAgresor_1.value = cipher.decode(clave, nombreAgresorCodificado_1.value);
			testimonio_1.value = cipher.decode(clave, testimonioCodificado_1.value);
			// Oculto pantallas
			document.getElementById("functionDecode").classList.add("hide");
			document.getElementById("decodedScreen").classList.remove("hide")
			// Creo cuarto boton de retroceso
			regresarDecodificar.addEventListener("click", () =>{
				document.getElementById("functionDecode").classList.remove("hide");
				document.getElementById("decodedScreen").classList.add("hide")
			})
			// Vuelvo a inicio
			backHome.addEventListener("click", () =>{
				document.getElementById("decodedScreen").classList.add("hide");
				document.getElementById("home").classList.remove("hide");
			})
		})
	})
	
})
