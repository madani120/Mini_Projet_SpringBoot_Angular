import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../model/produit';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.css']
})
export class DetailsProduitComponent implements OnInit {

  id:number | undefined ;
  produit : Produit = new Produit;
  constructor(private route: ActivatedRoute, private produitService:ProduitService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.produitService.getproduitById(this.id).subscribe(data=>{
      this.produit=data
    }
    )
  }

}
