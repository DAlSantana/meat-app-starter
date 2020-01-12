import { Component, OnInit } from '@angular/core';
import { CarrinhoCompraServico } from './carrinho-compra.service';

@Component({
  selector: 'mt-carrinho-compras',
  templateUrl: './carrinho-compras.component.html'
})
export class CarrinhoComprasComponent implements OnInit {

  constructor(private carrinhoCompraServico:CarrinhoCompraServico) { }

  ngOnInit() {
  }

  items(): any[]{
    return this.carrinhoCompraServico.items;
  }
  total(): number{
    return this.carrinhoCompraServico.total();
  }
  
  clear(){
    this.carrinhoCompraServico.clear();
  }
  removeItem(item: any){
    this.carrinhoCompraServico.removeItem(item);
  }
  addItem(item: any){
    this.carrinhoCompraServico.addItem(item);
  }

}
