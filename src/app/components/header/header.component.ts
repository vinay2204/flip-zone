import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  totalItem: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res: string | any[]) => {
      this.totalItem = res.length;
    });
  }
}
