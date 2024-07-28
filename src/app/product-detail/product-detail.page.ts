import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  product: any;
  constructor(private route: ActivatedRoute,
    private productService: ProductService) { }

    ngOnInit() {
      const productId = this.route.snapshot.paramMap.get('id');
      if (productId) {
        this.productService.getProduct(+productId).subscribe((data) => {
          this.product = data;
        });
      }
    }


    addToCart() {
      // this.cartService.addToCart(product);
      window.alert('Your product has been added to the cart!');
    }
}
