import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../model/produit';
import { ProduitService } from '../service/produit.service';
@Component({
  selector: 'app-create-produit',
  templateUrl: './create-produit.component.html',
  styleUrls: ['./create-produit.component.css']
})
export class CreateProduitComponent implements OnInit {
 produit: Produit = new Produit;
  constructor(private produitService:ProduitService, private router : Router) { }

  ngOnInit(): void {
  }

  gotoListProduit(){
    this.router.navigate(['/produits']);
  }

  saveProduit(){
    this.produitService.createProduit(this.produit).subscribe(data=>{
      console.log(data);
      this.gotoListProduit();
    },
    error=>console.error(error)
    )
  }

  onSubmit(){
    this.saveProduit()
  }

}
