import { Routes } from "@angular/router";
import { MyLibraryComponent } from "./views/my-library/my-library.component";
import { SettingsComponent } from "./views/settings/settings.component";

export const routes: Routes = [
  { path: "my-library", component: MyLibraryComponent },
  { path: "settings", component: SettingsComponent },
  { path: "", redirectTo: "/", pathMatch: "full" },
];
