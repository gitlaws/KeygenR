import { Component } from "@angular/core";
import { NavMenuComponent } from "../nav-menu/nav-menu.component";

@Component({
  selector: "app-toolbar",
  standalone: true,
  imports: [NavMenuComponent],
  templateUrl: "./toolbar.component.html",
  styleUrl: "./toolbar.component.scss",
})
export class ToolbarComponent {}
