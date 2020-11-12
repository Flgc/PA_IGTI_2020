import { _Pool } from './mysql';
import { iBase } from '../interface';

export function SelectOne(classe: iBase, id: number): Promise<iBase> {
  return new Promise((resolve) => {
    _Pool.getConnection((err, conexao) => {
      if (err) {
        resolve();
      } else {
        conexao.query(
          `SELECT * FROM ${classe.nome_tabela} WHERE _id = ${id}`,
          function (err, result) {
            if (err) {
              resolve();
            } else {
              resolve(result[0]);
            }
          }
        );
      }
    });
  });
}
