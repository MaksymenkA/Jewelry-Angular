import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { OwlModule } from 'ngx-owl-carousel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsListComponent } from './product/products-list/products-list.component';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { BlogComponent } from './blog/blog.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    PageNotFoundComponent,
    ProductsListComponent,
    ShopComponent,
    ProductComponent,
    BlogComponent,
    ServicesComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    OwlModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
