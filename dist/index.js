"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const mysql_1 = require("./dao/mysql");
const venom_bot_1 = require("venom-bot");
class Lead extends model_1.Base {
    constructor() {
        super(...arguments);
        this.nome_tabela = 'lead';
        this.name = '';
        this.phone = '';
    }
}
function main(whots) {
    whots.onMessage((message) => __awaiter(this, void 0, void 0, function* () {
        if (String(message.body).toUpperCase() == 'SAIR') {
            whots.sendText(message.from, 'Nossa conversa não será armazenadas, obrigado! ');
            return;
        }
        if (String(message.body).toUpperCase() == 'SIM') {
            let proprietario = new Lead();
            proprietario.name = message.sender.pushname;
            proprietario.phone = String(message.from).split('@')[0];
            yield proprietario.populate;
            whots.sendText(message.from, 'Obrigado por autorizar, registraremos na base de dados do histórico' +
                ' do seu veículo.');
            return;
        }
        whots.sendText(message.from, 'Olá!!! \n' +
            'Sou uma atendente virtual. \n' +
            'Com a sua autorização irei armazenar em uma base de dados nossas' +
            ' conversas. \n\n' +
            ' Digite "SIM" para autorizar ou "SAIR" para proceguir sem o armazenamento.');
    }));
}
try {
    (() => __awaiter(void 0, void 0, void 0, function* () {
        yield mysql_1.connectOn({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'whatssap',
        });
        let venom = yield venom_bot_1.create();
        main(venom);
    }))();
}
catch (error) {
    mysql_1.connectOFF();
}
