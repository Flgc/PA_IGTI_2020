import { Base } from './model';
import { connectOn, connectOFF } from './dao/mysql';

class PessoaP extends Base {
  nome_tabela: string = 'Pessoa';
  email: string = '';
  nome: string = '';
}

class Cliente extends Base {
  nome_tabela: string = 'cliente';
}

(async () => {
  await connectOn({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'teste',
  });

  let p1 = new PessoaP();
  await p1.findOne(2);
  console.log('Meu nome é ', p1.nome + ' Email: ', p1.email);

  // let c1 = new Cliente();
  // c1.findOne(5);

  await connectOFF();
})();
