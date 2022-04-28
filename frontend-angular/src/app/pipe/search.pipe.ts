import { Pipe, PipeTransform } from '@angular/core';
import { Produit } from '../model/produit';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(produits:Produit[]|undefined, searchText : string): Produit[]|undefined {
  if(!produits || !searchText)
  return produits
  return produits.filter(produit => 
    produit.nom?.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
  }

}
