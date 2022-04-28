package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="produits")
public class Produit {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long  id;


private String nom;
@Column(name="prix_unitaire")
private float prix_uni;

@Column(name="quantite")
private float qte;

public Produit() {
	
}

public Produit(long id, String nom, float prix_uni, float qte) {
	super();
	this.id = id;
	this.nom = nom;
	this.prix_uni = prix_uni;
	this.qte = qte;
}
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getNom() {
	return nom;
}
public void setNom(String nom) {
	this.nom = nom;
}
public float getPrix_uni() {
	return prix_uni;
}
public void setPrix_uni(float prix_uni) {
	this.prix_uni = prix_uni;
}
public float getqte() {
	return qte;
}
public void setqte(float qte) {
	this.qte = qte;
}


}
