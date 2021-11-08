import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { DeviceDetectorService } from "ngx-device-detector";

const phoneRoutes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/home-page-phone/home-page-phone.module").then(
        (m) => m.HomePagePhoneModule
      ),
    pathMatch: "full",
  },
];

const tabletRoutes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/home-page-tablet/home-page-tablet.module").then(
        (m) => m.HomePageTabletModule
      ),
    pathMatch: "full",
  },
];

const desktopRoutes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/home-page-desktop/home-page-desktop.module").then(
        (m) => m.HomePageDesktopModule
      ),
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(phoneRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  public constructor(
    private router: Router,
    private deviceService: DeviceDetectorService
  ) {
    if (this.deviceService.isTablet()) {
      this.router.resetConfig(tabletRoutes);
      return;
    } else if (this.deviceService.isDesktop()) {
      this.router.resetConfig(desktopRoutes);
      return;
    }
  }
}
