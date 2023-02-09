import { IProduto } from 'src/app/produtos';

export interface IProdutoCarrinho extends IProduto{
    quantidade: number;
}