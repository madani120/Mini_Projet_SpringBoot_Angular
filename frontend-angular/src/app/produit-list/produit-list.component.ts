import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../model/produit';
import { ProduitService } from '../service/produit.service';
@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {

  produits : Produit[] | undefined;
  searchText: any;
  constructor(private produitService: ProduitService, private router : Router) { }

  ngOnInit(): void {
    this.getProduits();
  }

  private getProduits(){
    this.produitService.getProduitsList().subscribe(data => {
      this.produits = data;
    })
  }
  updateProduit(id:number| undefined ){
    this.router.navigate(['modifier-produit',id])
  }

  deleteProduit(id:number| undefined){
    if(confirm("Voulez vous vraiment supprimer ?"))
    this.produitService.deleteProduit(id).subscribe(data=>{
      console.log(data);
      this.getProduits();
    }

    )
  }
  
  produitDetails(id:number| undefined){
    this.router.navigate(['details-produit',id])
  }

}
