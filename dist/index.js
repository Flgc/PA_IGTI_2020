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
class Pessoa extends model_1.Base {
    constructor() {
        super(...arguments);
        this.nome_tabela = 'pessoa';
    }
}
class Cliente extends model_1.Base {
    constructor() {
        super(...arguments);
        this.nome_tabela = 'cliente';
    }
}
(() => __awaiter(this, void 0, void 0, function* () {
    yield mysql_1.connectOn({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'teste',
    });
    // let p1 = new Pessoa();
    // await p1.findOne(1);
    let c1 = new Cliente();
    c1.findOne(5);
    yield mysql_1.connectOFF();
}))();
