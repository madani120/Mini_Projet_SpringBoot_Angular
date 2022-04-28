package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.RessourceNotFoundException;
import com.example.demo.model.Produit;
import com.example.demo.repository.ProduitRepository;

@CrossOrigin(origins ="http://localhost:4200") 
@RestController
@RequestMapping("/api/v1")
public class ProduitController {

	@Autowired
	private ProduitRepository produitRepository;
	
	//get all produts
	@GetMapping("/produits")
	public List<Produit> getAllProduits(){
		
		return produitRepository.findAll();
	}
	
	//create produit 
	@PostMapping("/produits")
	public Produit createProduit(@RequestBody Produit p) {
		return produitRepository.save(p);
	}
	
	//get produit by id
	@GetMapping("/produits/{id}")
	public ResponseEntity<Produit> getProduitById(@PathVariable Long id) {
		Produit p = produitRepository.findById(id)
				.orElseThrow(()-> new RessourceNotFoundException("Pas de produit correspondant pour l'id :"+id));
	return ResponseEntity.ok(p);
	}
	
	//update produit
	@PutMapping("/produits/{id}")
	public ResponseEntity<Produit> updateProduit(@PathVariable Long id, @RequestBody Produit p){
		Produit p1 = produitRepository.findById(id)
				.orElseThrow(()-> new RessourceNotFoundException("Pas de produit correspondant pour l'id :"+id));
     p1.setNom(p.getNom());
     p1.setPrix_uni(p.getPrix_uni());
     p1.setqte(p.getqte());
     
   return 	ResponseEntity.ok( produitRepository.save(p1));
     
	}
	
	//delete produit 
	@DeleteMapping("/produits/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteProduit(@PathVariable Long id){
		Produit p = produitRepository.findById(id)
				.orElseThrow(()-> new RessourceNotFoundException("Pas de produit correspondant pour l'id :"+id));
		produitRepository.delete(p);
		Map<String,Boolean> reponse = new HashMap<>();
		reponse.put("Suppression", Boolean.TRUE);
		return ResponseEntity.ok(reponse);
		
	}
	
}
