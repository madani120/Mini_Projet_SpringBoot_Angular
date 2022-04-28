import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProduitComponent } from './create-produit/create-produit.component';
import { DetailsProduitComponent } from './details-produit/details-produit.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';

const routes: Routes = [
 { path:'produits',component:ProduitListComponent},
 { path:'creer-produit',component:CreateProduitComponent},
 { path:'modifier-produit/:id',component:UpdateProduitComponent},
 { path:'details-produit/:id',component:DetailsProduitComponent},
 { path:'',redirectTo: 'produits',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 