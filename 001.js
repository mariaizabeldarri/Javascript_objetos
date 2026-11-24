let listaDeCompras = ["Arroz", "Feijão", "Macarrão", "Leite", "Ovo"];

listaDeCompras.push ("Pão", "Manteiga");

console.log ("Lista de Compras: ", listaDeCompras);

console.log (' Total de itens n Lista: ' + listaDeCompras.lenght);

listaDeCompras.foraEach (function(item)
{
    console.log ("_" + item);
});