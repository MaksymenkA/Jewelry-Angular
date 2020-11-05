import { ServiceDetailsComponent } from './services/service-details/service-details.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { ShopComponent } from './shop/shop.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'shop', component: ShopComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'serv', component: ServiceDetailsComponent},
  { path: '**/:error', component: PageNotFoundComponent }

];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
