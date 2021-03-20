import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartUtil } from 'src/app/utils/cart.util';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
  
})
export class CardComponent implements OnInit {

  @Input() product: any;

  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit() {

  }

  addToCart(){
    CartUtil.add(
      this.product._id,
      this.product.title,
      1,
      this.product.price,
      this.product.image
    )
    this.toastr.success(`${this.product.title} adicionado`, `Produto Adicionado`);
  }

}
