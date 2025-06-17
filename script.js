// Declaração de variáveis
let segundos = 0;
let intervalo = null;

// Eventos do DOM para manipulação
const h1 = document.getElementById('h1')
const display = document.getElementById('display');
const btnIniciar = document.getElementById('btn-iniciar');
const btnPausar = document.getElementById('btn-pausar');
const btnResetar = document.getElementById('btn-resetar');

// Botão de INICIAR
let btnIn = document.getElementById('btn-iniciar')
btnIniciar.addEventListener("click", iniciarCronos)

// Função de INICIAR no cronômetro
function iniciarCronos() {
    if (intervalo) return; // evita que existam multiplos intervalos

    // guarda em intervalo o passar de 1 segundo ou 1000ms
    intervalo = setInterval(() => {
        segundos++;
        atualizaDisplay();
    },1000)
}


// Botão de PAUSAR
let btnPause = document.getElementById('btn-pausar')
btnPausar.addEventListener("click", pauseCronos)

// Função de PAUSAR no cronômetro
function pauseCronos() {
    clearInterval(intervalo);
    intervalo = null;
}


// Botão de RESETAR
let btnReset = document.getElementById('btn-resetar')
btnResetar.addEventListener("click", resetCronos)

// Função de RESETAR no cronômetro
function resetCronos() {
    pauseCronos();
    segundos = 0;
    atualizaDisplay();
}


// Função de FORMATAR TEMPO
function formatarTempo(segundosTotais){
    const minutos = Math.floor(segundosTotais/60);
    const segundos = segundosTotais % 60;
    return `${String(minutos).padStart(2,'0')}:${String(segundos).padStart(2,'0')}`
}

// Função que envia o tempo para a página
function atualizaDisplay() {
    display.textContent = formatarTempo(segundos)
}
