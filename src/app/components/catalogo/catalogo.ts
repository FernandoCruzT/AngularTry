import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductsService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class CatalogoComponent {
  private productsService = inject(ProductsService);

  // Ahora sí puedes usar this.productsService directamente
  products = toSignal(this.productsService.getAll(), { initialValue: [] });
}