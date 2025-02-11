function calcularCuota() {
    let cantidad = parseFloat(document.getElementById('cantidad').value);
    let meses = parseInt(document.getElementById('meses').value);
    let tasaInteresAnual = 0.05; // 5% de interés anual
    let tasaInteresMensual = tasaInteresAnual / 12; // Convertir a interés mensual

    // Fórmula de la cuota mensual: (P * r) / (1 - (1 + r)^-n)
    let cuota = (cantidad * tasaInteresMensual) / (1 - Math.pow(1 + tasaInteresMensual, -meses));

    let totalPagar = cuota * meses; // Total que se pagará al finalizar el préstamo

    // Mostrar resultados en la página
    document.getElementById('cuota').innerText = cuota.toFixed(2) + '€';
    document.getElementById('total-pagar').innerText = totalPagar.toFixed(2) + '€';
    document.getElementById('cantidad-valor').innerText = cantidad.toLocaleString() + '€';
    document.getElementById('meses-valor').innerText = meses + ' meses';
}

// Escuchar cambios en los sliders y calcular automáticamente
document.getElementById('cantidad').addEventListener('input', calcularCuota);
document.getElementById('meses').addEventListener('input', calcularCuota);

// Calcular cuota al cargar la página
calcularCuota();