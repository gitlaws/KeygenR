import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { RouterModule } from "@angular/router";

@Component({
  selector: "app-product",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./product.component.html",
  styleUrl: "./product.component.scss",
})
export class ProductComponent {}
