const refeicoes = {

1:{
cafe:"🥪 Sanduíche congelado",
almoco:"🍚 Arroz • 🫘 Feijão • 🍗 Strogonoff de Frango",
jantar:"🍝 Lasanha"
},

2:{
cafe:"🌮 Tapioca",
almoco:"🍚 Arroz • 🫘 Feijão • 🍗 Coxa de Frango",
jantar:"🍔 Hambúrguer Caseiro"
},

3:{
cafe:"🥖 Pão francês com requeijão e presunto",
almoco:"🥕 Arroz com Cenoura • 🫘 Feijão • 🥩 Costela Frita",
jantar:"🍝 Lasanha"
},

4:{
cafe:"🥪 Sanduíche congelado",
almoco:"🍚 Arroz • 🫘 Feijão • 🍗 Frango Desfiado",
jantar:"🍝 Macarronada Cremosa"
},

5:{
cafe:"🌮 Tapioca",
almoco:"🥓 Arroz com Bacon • 🫘 Feijão • 🥩 Bife Acebolado",
jantar:"🥧 Torta Salgada"
},

6:{
cafe:"🥪 Sanduíche",
almoco:"🍳 Almoço preparado na hora",
jantar:"🍕 Pizza Congelada"
},

7:{
cafe:"🥖 Pão francês",
almoco:"🍳 Almoço preparado na hora",
jantar:"🍔 Lanche Livre"
}

};

// Repete automaticamente os primeiros 7 dias
// até completar os 30 dias.

for(let i=8;i<=30;i++){

let base=((i-1)%7)+1;

refeicoes[i]={

cafe:refeicoes[base].cafe,

almoco:refeicoes[base].almoco,

jantar:refeicoes[base].jantar

};

}