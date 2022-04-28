import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../model/produit';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {

  produit:Produit = new Produit;
  id:number | undefined ;
  constructor(private produitService :ProduitService,
     private route : ActivatedRoute, private router :Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.produitService.getproduitById(this.id).subscribe(data=>{
      this.produit=data;
    },
    error=>console.error(error))
  }
  gotoListProduit(){
    this.router.navigate(['/produits']);
  }


  onSubmit(){
    this.produitService.updateProduit(this.id,this.produit).subscribe(data=>{
      console.log(data);
      this.gotoListProduit();
    },
    error=>console.error(error)
    )
  }

}
