import { createPool, Pool } from 'mysql';
import { iConfigDB } from '../interface';

let _Pool: Pool;

export function connectOn(config: iConfigDB): Promise<Boolean> {
  return new Promise((resolve) => {
    _Pool = createPool(config);

    _Pool.getConnection((err, conexao) => {
      if (err) {
        console.log('Conexão falhou');
        resolve(false);
      } else {
        console.log('Conexão realizada com sucesso');
        resolve(true);
      }
    });
    resolve(true);
  });
}

export function connectOFF() {}
