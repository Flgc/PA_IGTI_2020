import { Base } from './model';
import { connectOn, connectOFF } from './dao/mysql';

class PessoaP extends Base {
  nome_tabela: string = 'Pessoa';
  email: string = '';
  nome: string = '';
}

class ClienteC extends Base {
  nome_tabela: string = 'Cliente';
  nome: string = '';
  endereco: string = '';
  email: string = '';
}

(async () => {
  await connectOn({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'whatsapp',
  });

  let p1 = new PessoaP();
  await p1.findOne(2);
  console.log('Meu nome é ', p1.nome + ' / Email: ', p1.email);

  let c1 = new ClienteC();
  await c1.findOne(1);
  console.log(
    'Cliente Nome: ' +
      c1.nome +
      ' / Endereço: ' +
      c1.endereco +
      ' / E-mail: ' +
      c1.email
  );

  await connectOFF();
})();
