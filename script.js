// DATA QUE VOCÊS SE CONHECERAM
const dataInicio = new Date(2025, 10, 17, 0, 0, 0);

// FUNÇÃO DO CONTADOR
function atualizarContador() {
    const agora = new Date();
    let inicio = new Date(dataInicio);

    let anos = agora.getFullYear() - inicio.getFullYear();
    let meses = agora.getMonth() - inicio.getMonth();
    let dias = agora.getDate() - inicio.getDate();
    let horas = agora.getHours() - inicio.getHours();
    let minutos = agora.getMinutes() - inicio.getMinutes();
    let segundos = agora.getSeconds() - inicio.getSeconds();

    // Ajustes negativos
    if (segundos < 0) {
        segundos += 60;
        minutos--;
    }

    if (minutos < 0) {
        minutos += 60;
        horas--;
    }

    if (horas < 0) {
        horas += 24;
        dias--;
    }

    if (dias < 0) {
        // pega quantidade de dias do mês anterior
        const ultimoDiaMesAnterior = new Date(
            agora.getFullYear(),
            agora.getMonth(),
            0
        ).getDate();

        dias += ultimoDiaMesAnterior;
        meses--;
    }

    if (meses < 0) {
        meses += 12;
        anos--;
    }

    document.getElementById("anos").innerText = anos;
    document.getElementById("meses").innerText = meses;
    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;
}

// CHAMA O CONTADOR
setInterval(atualizarContador, 1000);
atualizarContador();
