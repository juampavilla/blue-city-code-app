import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { LinksComponent } from './pages/links/links.component';
import { BlogComponent } from './pages/blog/blog.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'news', component: NewsComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'links', component: LinksComponent }
];
// const routes: Routes = [
//     {
//       path: 'ruta-standalone',
//       loadComponent: () => import('./ruta-standalone.component').then(c => c.RutaStandaloneComponent)
//     }
//   ];
  