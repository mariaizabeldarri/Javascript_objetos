const cliente = {
    nome: "Paola",
    idade: 32,
    cpf: 11111111111,
    saldo: 200,
    efetuarPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log ("Saldo insuficiente");
        } else {
            this.saldo -= valor;
            consle.log ('Pagamento efetuado. Saldo atual: ${this.saldo}')
        }
    }
};