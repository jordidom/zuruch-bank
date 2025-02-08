function filtrarOperaciones(tipo) {
    let filas = document.querySelectorAll("#tabla-operaciones tr");
    filas.forEach(fila => {
        if (tipo === "todos") {
            fila.style.display = "";
        } else if (tipo === "gastos" && fila.classList.contains("gasto")) {
            fila.style.display = "";
        } else if (tipo === "ingresos" && fila.classList.contains("ingreso")) {
            fila.style.display = "";
        } else {
            fila.style.display = "none";
        }
    });
}