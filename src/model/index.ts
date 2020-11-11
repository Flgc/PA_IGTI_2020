import { iBase } from '../interface';

export abstract class Base implements iBase {
  _id: number = 0;
  abstract nome_tabela: string;
  findOne(id: number): Promise<void> {
    return new Promise((resolve) => {
      console.log(`SELECT * FROM ${this.nome_tabela} WHERE _id = ${id}`);
      resolve();
    });
  }
}
