import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageDesktopComponent } from "./home-page-desktop.component";

const routes: Routes = [
  {
    path: "",
    component: HomePageDesktopComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class HomePageDesktopRoutingModule {}
