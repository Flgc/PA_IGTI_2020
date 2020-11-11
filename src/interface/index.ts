export interface iBase {
  _id: number;
  nome_tabela: string;
  findOne(id: number): Promise<void>;
}
