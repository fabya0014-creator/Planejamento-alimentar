const calendario = document.getElementById("calendario");
const modal = document.getElementById("modal");
const fechar = document.getElementById("fechar");

const titulo = document.getElementById("tituloDia");
const cafe = document.getElementById("cafe");
const almoco = document.getElementById("almoco");
const jantar = document.getElementById("jantar");

const concluir = document.getElementById("concluir");

const barra = document.getElementById("barra");
const texto = document.getElementById("textoProgresso");

let diaSelecionado = 1;

let concluidos = JSON.parse(localStorage.getItem("diasConcluidos")) || [];

function atualizarProgresso(){

    let porcentagem = (concluidos.length / 30) * 100;

    barra.style.width = porcentagem + "%";

    texto.innerHTML = `${concluidos.length} de 30 dias concluídos`;

}

function abrirDia(numero){

    diaSelecionado = numero;

    titulo.innerHTML = `🌸 Dia ${numero}`;

    cafe.innerHTML = refeicoes[numero].cafe;

    almoco.innerHTML = refeicoes[numero].almoco;

    jantar.innerHTML = refeicoes[numero].jantar;

    if(concluidos.includes(numero)){
        concluir.innerHTML = "✅ Dia Concluído";
        concluir.style.background = "#4CAF50";
    }else{
        concluir.innerHTML = "✅ Concluir Dia";
        concluir.style.background = "#ff69b4";
    }

    modal.style.display = "flex";

}

function criarCalendario(){

    calendario.innerHTML = "";

    for(let i=1;i<=30;i++){

        const card = document.createElement("div");

        card.className = "dia";

        if(concluidos.includes(i)){
            card.classList.add("concluido");
        }

        card.innerHTML = `
            <div class="numero">${i}</div>
            <small>Toque para abrir</small>
        `;

        card.onclick = ()=>abrirDia(i);

        calendario.appendChild(card);

    }

}

concluir.onclick = ()=>{

    if(!concluidos.includes(diaSelecionado)){

        concluidos.push(diaSelecionado);

        localStorage.setItem("diasConcluidos",JSON.stringify(concluidos));

    }

    criarCalendario();

    atualizarProgresso();

    abrirDia(diaSelecionado);

}

fechar.onclick = ()=>{

    modal.style.display = "none";

}

window.onclick = (e)=>{

    if(e.target==modal){

        modal.style.display="none";

    }

}

criarCalendario();

atualizarProgresso();

document.getElementById("btnCompras").onclick = ()=>{

alert(`🛒 LISTA DE COMPRAS

🍚 Arroz
🫘 Feijão
🍗 Frango
🥩 Costela
🥩 Bife
🥓 Bacon
🧀 Requeijão
🥪 Pão de Sal
🌮 Tapioca
🍞 Pão para Sanduíche
🍕 Pizza Congelada
🍅 Molho de Tomate
🧅 Cebola
🥕 Cenoura
🍝 Macarrão
🥛 Creme de Leite
🧀 Mussarela`);

}

document.getElementById("btnDomingo").onclick = ()=>{

alert(`🍳 PREPARAÇÃO DE DOMINGO

✅ Fazer arroz

✅ Fazer feijão

✅ Preparar strogonoff

✅ Fazer frango desfiado

✅ Preparar costela

✅ Fazer bife acebolado

✅ Montar marmitas

✅ Congelar

❤️ Boa semana!`);

}

document.getElementById("btnCalendario").onclick = ()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}