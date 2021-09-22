import { Clientes } from './clientes';
import { Produtos } from './produtos';
export class Pedidos {
  codigo!: number;
  data!: string;
  ativo!: boolean;
  cliente = new Clientes;
  produto = new Produtos;
}
