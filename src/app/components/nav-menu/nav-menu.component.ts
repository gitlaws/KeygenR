import { Component, ElementRef, OnDestroy } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-nav-menu",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./nav-menu.component.html",
  styleUrl: "./nav-menu.component.scss",
})
export class NavMenuComponent implements OnDestroy {
  menuOpen = false;
  private boundDocumentClickHandler: any;

  constructor(private elementRef: ElementRef) {}

  toggleMenu(event?: MouseEvent) {
    if (event) event.stopPropagation();
    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      this.boundDocumentClickHandler = this.documentClickHandler.bind(this);
      document.addEventListener("click", this.boundDocumentClickHandler);
    } else {
      this.removeDocumentClickListener();
    }
  }

  closeMenu() {
    this.menuOpen = false;
    this.removeDocumentClickListener();
  }

  private documentClickHandler(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeMenu();
    }
  }

  private removeDocumentClickListener() {
    if (this.boundDocumentClickHandler) {
      document.removeEventListener("click", this.boundDocumentClickHandler);
      this.boundDocumentClickHandler = null;
    }
  }

  ngOnDestroy(): void {
    this.removeDocumentClickListener();
  }
}
