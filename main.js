const botoes = document.querySelectorA11(".botao");
const textos = document.querySelectorA11("aba-conteudo");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classlist.remove("ativo");
            textos[j].classlist.remove("ativo");
        }

        botoes[i].classlist.add("ativo");
        textos[i].classlist.add("ativo");
    }
}

const contadores = document.querySelectorA11(".contador");
const tempoObjetivo1 = new Date("2024-10-05t00:00:00");
const tempoObjetivo2 = new Date("2024-12-05t00:00:00");
const tempoObjetivo3 = new Date("2024-12-06t00:00:00");
const tempoObjetivo1 = new Date("2024-12-15t00:00:00");

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];


function calculaTempo(tempoObjetivo){
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0){
        return dias +" dias "+ horas + " horas " + minutos + " minutos " + segundos + " segundos ";
    } else {
        return "prazo Finalizado";
    }
    }
    
function atualizaCronometro(){
    for (let i=0; i<contadores.length;i++){
        contadores[i].textContent = calculaTempo(tempos[i]);
    }
 }
 
   function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
   }

   //comecaCronometro();