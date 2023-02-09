import { CarrinhoService } from './../../carrinho.service';
import { IProdutoCarrinho } from './../../carrinho';
import { NotificacaoService } from './../../notificacao.service';
import { ProdutosService } from './../../produtos.service';
import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/produtos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private produtosService : ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ){}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
   
    this.produto = this.produtosService.getOne(produtoId);
    console.log(this.produtosService.getOne(produtoId))
  }


  
  adicionarAoCarrinho(){
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho");
    const produto: IProdutoCarrinho = {
      ...this.produto!, 
      quantidade: this.quantidade
    }
    this.carrinhoService.adicionarCarrinho(produto);
    console.log(produto.id)
    console.log(produto.descricao)
  }


}
