import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSectionComponent } from './main-section/main-section.component';
import { AuthGuard } from './guards/auth.guard';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [{ path: 'product-page', loadChildren: () => import('./product-page/product-page.module').then(m => m.ProductPageModule),

canActivate:[AuthGuard] },
{
  path:'home',
  component:MainSectionComponent
},
{
  path:'**',
  component:MainSectionComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
