import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxBootstrapIconsModule, allIcons } from "ngx-bootstrap-icons";
import { BannerComponent } from './banner/banner.component';
import { OurComponent } from './our/our.component';
import { AboutComponent } from './about/about.component';
import { SkatingComponent } from './skating/skating.component';
import { ShopComponent } from './shop/shop.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    OurComponent,
    AboutComponent,
    SkatingComponent,
    ShopComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    NgbModule,
    NgxBootstrapIconsModule.pick(allIcons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
