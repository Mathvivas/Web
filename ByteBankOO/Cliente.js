export class Cliente {
    node;
    _cpf;

    constructor(nome, cpf) {
        this._cpf = cpf;
        this.nome = nome;
    }

    get cpf() {
        return this._cpf;
    }
}