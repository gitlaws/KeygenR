import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./features/prompt-input/prompt-input.component").then(
        (m) => m.PromptInputComponent
      ),
  },

  //   {
  //     path: "Home",
  //     loadComponent: () =>
  //       import("./core/home/home.component").then((m) => m.HomeComponent),
  //   },
];
