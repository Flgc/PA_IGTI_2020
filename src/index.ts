import { Base } from './model';
import { connectOn, connectOFF } from './dao/mysql';
import { create, Whatsapp } from 'venom-bot';

class Lead extends Base {
  nome_tabela: string = 'lead';
  name: string = '';
  phone: string = '';
}

function main(whots: Whatsapp) {
  whots.onMessage(async (message) => {
    if (String(message.body).toUpperCase() == 'SAIR') {
      whots.sendText(
        message.from,
        'Nossa conversa não será armazenadas, obrigado! '
      );

      return;
    }

    if (String(message.body).toUpperCase() == 'SIM') {
      let proprietario = new Lead();
      proprietario.name = message.sender.pushname;
      proprietario.phone = String(message.from).split('@')[0];
      await proprietario.populate;

      whots.sendText(
        message.from,
        'Obrigado por autorizar, registraremos na base de dados do histórico' +
          ' do seu veículo.'
      );

      return;
    }

    whots.sendText(
      message.from,
      'Olá!!! \n' +
        'Sou uma atendente virtual. \n' +
        'Com a sua autorização irei armazenar em uma base de dados nossas' +
        ' conversas. \n\n' +
        ' Digite "SIM" para autorizar ou "SAIR" para proceguir sem o armazenamento.'
    );
  });
}

try {
  (async () => {
    await connectOn({
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'whatssap',
    });

    let venom = await create();

    main(venom);
  })();
} catch (error) {
  connectOFF();
}
