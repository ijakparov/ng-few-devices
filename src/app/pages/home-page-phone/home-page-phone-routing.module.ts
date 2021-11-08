import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePagePhoneComponent } from "./home-page-phone.component";

const routes: Routes = [
  {
    path: "",
    component: HomePagePhoneComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class HomePagePhoneRoutingModule {}
