import { Component, inject, OnInit } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { MessageComponent } from '../message/message.component';


import { DataService, Message } from '../services/data.service';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  products: any[] = [];
  private data = inject(DataService);
  constructor(private productService: ProductService, private router: Router) {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  viewProduct(id:number){
    this.router.navigate(['/product-detail', id])
  }
}
