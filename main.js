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
let tempoAtual = new Date()

contadores[0].textContent = tempoObjetivo1 - tempoAtual1;