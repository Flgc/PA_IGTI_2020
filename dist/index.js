"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const mysql_1 = require("./dao/mysql");
class PessoaP extends model_1.Base {
    constructor() {
        super(...arguments);
        this.nome_tabela = 'Pessoa';
        this.email = '';
        this.nome = '';
    }
}
class ClienteC extends model_1.Base {
    constructor() {
        super(...arguments);
        this.nome_tabela = 'Cliente';
        this.nome = '';
        this.endereco = '';
        this.email = '';
    }
}
(() => __awaiter(this, void 0, void 0, function* () {
    yield mysql_1.connectOn({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'whatsapp',
    });
    let p1 = new PessoaP();
    yield p1.findOne(2);
    console.log('Meu nome é ', p1.nome + ' / Email: ', p1.email);
    let c1 = new ClienteC();
    yield c1.findOne(1);
    console.log('Cliente Nome: ' +
        c1.nome +
        ' / Endereço: ' +
        c1.endereco +
        ' / E-mail: ' +
        c1.email);
    yield mysql_1.connectOFF();
}))();
