import { Component } from "@angular/core";
import { NavMenuComponent } from "../nav-menu/nav-menu.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-toolbar",
  standalone: true,
  imports: [NavMenuComponent, RouterLink],
  templateUrl: "./toolbar.component.html",
  styleUrl: "./toolbar.component.scss",
})
export class ToolbarComponent {}
