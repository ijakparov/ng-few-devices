import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageDesktopComponent } from "./home-page-desktop.component";
import { HomePageDesktopRoutingModule } from "./home-page-desktop-routing.module";
import { HeaderDeskpadModule } from "src/app/features/header/header-deskpad.module";
import { FooterDesktopModule } from "src/app/features/footer/footer-desktop.module";
import { ProductCardModule } from "src/app/features/product-card/product-card.module";
import { ButtonModule } from "src/app/shared/button/button.module";

@NgModule({
  declarations: [HomePageDesktopComponent],
  imports: [
    CommonModule,
    HomePageDesktopRoutingModule,
    HeaderDeskpadModule,
    FooterDesktopModule,
    ProductCardModule,
    ButtonModule,
  ],
})
export class HomePageDesktopModule {}
