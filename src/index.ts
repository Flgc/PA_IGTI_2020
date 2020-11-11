import { Base } from './model';
import { connectOn, connectOFF } from './dao/mysql';

class Pessoa extends Base {
  nome_tabela: string = 'pessoa';
}

class Cliente extends Base {
  nome_tabela: string = 'cliente';
}

(async () => {
  await connectOn({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'aulajpa',
  });
  // let p1 = new Pessoa();
  // await p1.findOne(1);

  let c1 = new Cliente();
  c1.findOne(5);
  await connectOFF();
})();
