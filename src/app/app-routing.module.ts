import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllItemComponent } from './all-item/all-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ViewAllItemComponent } from './view-all-item/view-all-item.component';

const routes: Routes = [
  {
    path: '', component: AllItemComponent
  },
  {
    path: 'view-all-item', component: ViewAllItemComponent
  },
  {
    path: 'product-detail/:id', component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
