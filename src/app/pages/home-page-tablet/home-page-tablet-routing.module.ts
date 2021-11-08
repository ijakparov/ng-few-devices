import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageTabletComponent } from "./home-page-tablet.component";

const routes: Routes = [
  {
    path: "",
    component: HomePageTabletComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class HomePageTabletRoutingModule {}
