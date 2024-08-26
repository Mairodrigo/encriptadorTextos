// VARIABLES
let campoCifrar = document.querySelector(".campo__cifrar");
let areaPresentacion = document.querySelector(".area__presentacion");
let imgPresentacion = document.querySelector;

// FUNCIONES
function encriptarMensaje() {
	let textoUsuario = campoCifrar.value;

	let textoEncriptado = textoUsuario
		.replace(/e/g, "enter")
		.replace(/i/g, "imes")
		.replace(/a/g, "ai")
		.replace(/o/g, "ober")
		.replace(/u/g, "ufat");
	mostrarResultado(textoEncriptado);
}

function desencriptarMensaje() {
	let textoUsuario = campoCifrar.value;

	let textoDesencriptado = textoUsuario
		.replace(/enter/g, "e")
		.replace(/imes/g, "i")
		.replace(/ai/g, "a")
		.replace(/ober/g, "o")
		.replace(/ufat/g, "u");
	mostrarResultado(textoDesencriptado);
}

function mostrarResultado(mensaje) {
	areaPresentacion.value = mensaje;
}

function copiarMensaje() {
	navigator.clipboard
		.writeText(areaPresentacion.value) 
		.then(() => {
			alert("Mensaje copiado al portapapeles!"); 
		})
		.catch((err) => {
			console.error("Error al copiar: ", err);
		});
}
