import { Base } from './model';

class Pessoa extends Base {
  nome_tabela: string = 'pessoa';
}
(async () => {
  let p1 = new Pessoa();
  await p1.findOne(1);
})();
