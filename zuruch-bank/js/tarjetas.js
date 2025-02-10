document.addEventListener("DOMContentLoaded", function () {
    fetch("tarjetas.json")
        .then(response => response.json())
        .then(data => mostrarTarjetas(data))
        .catch(error => console.error("Error cargando las tarjetas:", error));
});

function mostrarTarjetas(tarjetas) {
    const listaTarjetas = document.getElementById("lista-tarjetas");
    listaTarjetas.innerHTML = "";

    tarjetas.forEach((tarjeta, index) => {
        const tarjetaElement = document.createElement("div");
        tarjetaElement.classList.add("card", "mb-3", "p-3", "bg-light");
        tarjetaElement.innerHTML = `
            <p><strong>Tipo:</strong> ${tarjeta.tipo}</p>
            <p><strong>Número:</strong> **** **** **** ${tarjeta.numero.slice(-4)}</p>
            <p><strong>Estado:</strong> ${tarjeta.activa ? "Activa" : "Inactiva"}</p>
            <button class="btn btn-warning" onclick="toggleTarjeta(${index})">
                ${tarjeta.activa ? "Dar de baja temporalmente" : "Reactivar"}
            </button>
            <button class="btn btn-danger" onclick="eliminarTarjeta(${index})">Eliminar</button>
        `;
        listaTarjetas.appendChild(tarjetaElement);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    fetch("tarjetas.json")
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("tarjetas", JSON.stringify(data));
            mostrarTarjetas(data);
        })
        .catch(error => console.error("Error cargando las tarjetas:", error));
});

function mostrarTarjetas(tarjetas) {
    const listaTarjetas = document.getElementById("lista-tarjetas");
    listaTarjetas.innerHTML = "";

    tarjetas.forEach((tarjeta, index) => {
        const tarjetaElement = document.createElement("div");
        tarjetaElement.classList.add("card", "mb-3", "p-3", "bg-light");
        tarjetaElement.innerHTML = `
            <p><strong>Tipo:</strong> ${tarjeta.tipo}</p>
            <p><strong>Número:</strong> **** **** **** ${tarjeta.numero.slice(-4)}</p>
            <p><strong>Estado:</strong> <span id="estado-${index}">${tarjeta.activa ? "Activa" : "Inactiva"}</span></p>
            <button class="btn btn-warning" id="toggle-${index}" onclick="toggleTarjeta(${index})">
                ${tarjeta.activa ? "Bloquear tarjeta" : "Activar tarjeta"}
            </button>
            <button class="btn btn-danger" onclick="eliminarTarjeta(${index})">Eliminar</button>
        `;
        listaTarjetas.appendChild(tarjetaElement);
    });
}

document.getElementById("solicitar-tarjeta").addEventListener("click", function () {
    window.location.href = "modelo-tarjetas.html";
});

function eliminarTarjeta(index) {
    let tarjetas = JSON.parse(localStorage.getItem("tarjetas")) || [];
    tarjetas.splice(index, 1);
    localStorage.setItem("tarjetas", JSON.stringify(tarjetas));
    mostrarTarjetas(tarjetas);
}

function toggleTarjeta(index) {
    let tarjetas = JSON.parse(localStorage.getItem("tarjetas")) || [];
    tarjetas[index].activa = !tarjetas[index].activa;
    localStorage.setItem("tarjetas", JSON.stringify(tarjetas));
    
    document.getElementById(`estado-${index}`).innerText = tarjetas[index].activa ? "Activa" : "Inactiva";
    document.getElementById(`toggle-${index}`).innerText = tarjetas[index].activa ? "Bloquear tarjeta" : "Activar tarjeta";
}