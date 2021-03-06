import { CarroItem } from "./carrinho-item.model"
import { MenuItem } from "../menu-item/menu-item.model"

export class CarrinhoCompraServico{
    items: CarroItem[]=[]

    clear(){
            this.items = []
    }
    addItem(item:MenuItem){
        let foundItem = this.items.find((mItem) => mItem.menuItem.id ===item.id)
        if(foundItem){
               foundItem.quantity = foundItem.quantity +1 
        }else{
            this.items.push(new CarroItem(item))
        }
    }
    removeItem(item:CarroItem){
        this.items.splice(this.items.indexOf(item),1)
    }
    total():number{
        return this.items.map(item => item.value()).reduce((prev,value)=> prev +value, 0)
    }
}