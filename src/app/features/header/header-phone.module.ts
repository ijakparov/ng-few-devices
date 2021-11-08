import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderPhoneComponent } from "./components/header-phone/header-phone.component";

@NgModule({
  declarations: [HeaderPhoneComponent],
  imports: [CommonModule],
  exports: [HeaderPhoneComponent],
})
export class HeaderPhoneModule {}
