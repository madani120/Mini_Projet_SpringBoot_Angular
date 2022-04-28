import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../model/produit';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private baseURL ="http://localhost:8080/api/v1/produits";

  constructor(private httpClient: HttpClient) { }

  getProduitsList():Observable<Produit[]>{
    return this.httpClient.get<Produit[]>(`${this.baseURL}`);
  }

  createProduit(produit: Produit): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, produit);
  }

  getproduitById(id: number|undefined): Observable<Produit>{
    return this.httpClient.get<Produit>(`${this.baseURL}/${id}`);
  }

  updateProduit(id: number|undefined, produit: Produit): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, produit);
  }

  deleteProduit(id: number|undefined): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
