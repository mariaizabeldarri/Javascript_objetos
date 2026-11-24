const clientes ={
    nome: "Paola",
    idade: 32,
    cpf: 11111111111,
    email:"paola.rodrigues1201@gmail.com"
}

console.log(`O nome do cliente é ${clientes.nome}`);
console.log(`Os três primeiros digitos do cpf do cliente são ${String(clientes.cpf).slice(0, 3)}`);


const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
    console.log (`A chave ${chave} tem valor ${clientes[chave]}`);
})