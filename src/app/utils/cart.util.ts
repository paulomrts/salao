import { CartItem } from "../models/cart-item.model";
import { Cart } from "../models/cart.model";

export class CartUtil{
   

    public static get(): Cart{
        
        const data = localStorage.getItem('salaocart');

        if(!data)
        return new Cart();

        return JSON.parse(data); //Retornar os dados do carrinho
    }
    // Recuperar os dados do Local Storage

    public static add(id: string, product: string, quantity: number, price:number, image: string){
        //Primeiro obtemos o carrinho

        let cart = this.get();

        //Geramos novo item

        const item = new CartItem(id,product,quantity,price,image);

        //Adicionamos itens ao carrinho

        cart.items.push(item);

        //Salvamos no localStorage

        localStorage.setItem('salacart', JSON.stringify(cart));
    }

    public static update(cart: Cart){
        //Salvamos no localStorage

        localStorage.setItem('salaocart', JSON.stringify(cart));
    }

    public static clear(){
        localStorage.removeItem('salaocart');
    }
    
}