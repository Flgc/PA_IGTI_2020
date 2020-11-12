import { iBase } from '../interface';
import { SelectOne } from '../dao/daoMysql';

export abstract class Base implements iBase {
  _id: number = 0;
  abstract nome_tabela: string;

  populate(value: iBase) {
    Object.assign(this, value);
  }

  findOne(id: number): Promise<void> {
    return new Promise(async (Resolve) => {
      let obj = await SelectOne(this, id);
      this.populate(obj);
      Resolve();
    });
  }
}
