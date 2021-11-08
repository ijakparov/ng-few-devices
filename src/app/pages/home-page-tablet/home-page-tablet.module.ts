import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageTabletComponent } from "./home-page-tablet.component";
import { HomePageTabletRoutingModule } from "./home-page-tablet-routing.module";
import { HeaderDeskpadModule } from "src/app/features/header/header-deskpad.module";
import { FooterTabletModule } from "src/app/features/footer/footer-tablet.module";
import { ProductCardModule } from "src/app/features/product-card/product-card.module";

@NgModule({
  declarations: [HomePageTabletComponent],
  imports: [
    CommonModule,
    HomePageTabletRoutingModule,
    HeaderDeskpadModule,
    FooterTabletModule,
    ProductCardModule,
  ],
})
export class HomePageTabletModule {}
