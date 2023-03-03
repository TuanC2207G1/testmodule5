import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CreateProductComponent} from "./create-product/create-product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {ProductsComponent} from "./products/products.component";
import {DeleteComponent} from "./delete/delete.component";

const routes: Routes = [{path:'',component:HomeComponent},
  {path:'create',component:CreateProductComponent},
  {path:'tour/:id',component:ProductsComponent},
  {path:'delete/:id',component:DeleteComponent},
  {path:'edit/:id',component:EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
