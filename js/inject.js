const urlInput = document.getElementById("url");
const dbtn = document.getElementById("dwnbtn");

dbtn.addEventListener("click", async (e) => {
	e.preventDefault;
	try {
		if (!urlInput.value.includes("http")) {
			alert("Ingrese una URL válida");
			return;
		} else {
			const response = await fetch(urlInput.value);
			const file = await response.blob();
			const link = document.createElement("a");
			link.href = URL.createObjectURL(file);
			link.download = new Date().getTime();
			link.click();
		}
	} catch (err) {
		alert("Error al descargar el archivo");
	}
});
