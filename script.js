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
// DATA QUE SE CONHECERAM
const dataConheceram = new Date(2025, 10, 17, 0, 0, 0);

// DATA DO INÍCIO DO NAMORO (MUDE AQUI)
const dataNamoro = new Date(202, 0, 30, 0, 0, 0); // exemplo 10/01/2024

function calcularTempo(dataInicio) {
    const agora = new Date();

    let anos = agora.getFullYear() - dataInicio.getFullYear();
    let meses = agora.getMonth() - dataInicio.getMonth();
    let dias = agora.getDate() - dataInicio.getDate();

    if (dias < 0) {
        meses--;
        dias += new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    const diffMs = agora - new Date(
        agora.getFullYear(),
        agora.getMonth(),
        agora.getDate(),
        dataInicio.getHours(),
        dataInicio.getMinutes(),
        dataInicio.getSeconds()
    );

    const horas = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diffMs / (1000 * 60)) % 60);
    const segundos = Math.floor((diffMs / 1000) % 60);

    return { anos, meses, dias, horas, minutos, segundos };
}

function atualizarContadores() {
    const t1 = calcularTempo(dataConheceram);
    document.getElementById("anos").innerText = t1.anos;
    document.getElementById("meses").innerText = t1.meses;
    document.getElementById("dias").innerText = t1.dias;
    document.getElementById("horas").innerText = t1.horas;
    document.getElementById("minutos").innerText = t1.minutos;
    document.getElementById("segundos").innerText = t1.segundos;

    const t2 = calcularTempo(dataNamoro);
    document.getElementById("anosN").innerText = t2.anos;
    document.getElementById("mesesN").innerText = t2.meses;
    document.getElementById("diasN").innerText = t2.dias;
    document.getElementById("horasN").innerText = t2.horas;
    document.getElementById("minutosN").innerText = t2.minutos;
    document.getElementById("segundosN").innerText = t2.segundos;
}

setInterval(atualizarContadores, 1000);
atualizarContadores();

// CHAMA O CONTADOR
setInterval(atualizarContador, 1000);
atualizarContador();
