document.addEventListener("DOMContentLoaded", function() {
    cargarOperaciones();
});

// Variable global para almacenar las operaciones y evitar recargar el JSON cada vez
let operacionesGlobales = [];

function cargarOperaciones() {
    fetch("tabla.json")
        .then(response => response.json())
        .then(data => {
            operacionesGlobales = data; // Guardamos los datos en una variable global
            mostrarOperaciones(operacionesGlobales);
        })
        .catch(error => console.error("Error cargando el JSON:", error));
}

function mostrarOperaciones(operaciones) {
    let tbody = document.getElementById("tabla-operaciones");
    tbody.innerHTML = ""; // Limpiar contenido previo

    operaciones.forEach(op => {
        let fila = document.createElement("tr");
        fila.classList.add(op.tipo); // Añadir clase según el tipo (ingreso/gasto)

        fila.innerHTML = `
            <td>${op.fecha}</td>
            <td>${op.descripcion}</td>
            <td class="${op.tipo === 'gasto' ? 'text-danger' : 'text-success'}">${op.cantidad}</td>
        `;

        tbody.appendChild(fila);
    });
}

// ✅ Función corregida para filtrar operaciones según su tipo
function filtrarOperaciones(tipo) {
    if (tipo === "todos") {
        mostrarOperaciones(operacionesGlobales);
    } else {
        let operacionesFiltradas = operacionesGlobales.filter(op => op.tipo === tipo);
        mostrarOperaciones(operacionesFiltradas);
    }
}