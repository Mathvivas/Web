import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {
    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia)
    }

    sacar(valor) {
        const taxa = 1.02
        return this._sacar(valor, taxa)
    }
}