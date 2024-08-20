// VARIABLES
let campoCifrar = document.querySelector(".campo__cifrar");
let areaPresentacion = document.querySelector(".area__presentacion");
let imgPresentacion = document.querySelector(".area__presentacion__img");

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
	areaPresentacion.value = mensaje; // Mostrar el mensaje en el área de presentación
	imgPresentacion.style.display = "none"; // Ocultar la imagen si hay texto en el área de presentación
}

function copiarMensaje() {
	navigator.clipboard
		.writeText(areaPresentacion.value) // Copiar el texto al portapapeles
		.then(() => {
			alert("Mensaje copiado al portapapeles!"); // Mensaje de éxito
		})
		.catch((err) => {
			console.error("Error al copiar: ", err);
		});
}
