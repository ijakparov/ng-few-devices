import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePagePhoneComponent } from "./home-page-phone.component";
import { HomePagePhoneRoutingModule } from "./home-page-phone-routing.module";
import { HeaderPhoneModule } from "src/app/features/header/header-phone.module";
import { FooterPhoneModule } from "src/app/features/footer/footer-phone.module";
import { ProductCardModule } from "src/app/features/product-card/product-card.module";

@NgModule({
  declarations: [HomePagePhoneComponent],
  imports: [
    CommonModule,
    HomePagePhoneRoutingModule,
    HeaderPhoneModule,
    FooterPhoneModule,
    ProductCardModule,
  ],
})
export class HomePagePhoneModule {}
