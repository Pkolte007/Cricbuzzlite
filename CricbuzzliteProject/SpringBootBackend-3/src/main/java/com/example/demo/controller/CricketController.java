package com.example.demo.controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Cricket;

import com.example.demo.repository.CricketRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CricketController {

	@Autowired
	private CricketRepository cricRep;
	
	
	@GetMapping("/crickets")
	public List <Cricket> getAllCricket(){
		return cricRep.findAll();
	}
	
	@PostMapping("/crickets")
	public Cricket createCricket(@RequestBody Cricket cricket) {
		return cricRep.save(cricket);
	}
	
	@DeleteMapping("/crickets/{id}")
	public ResponseEntity<Map <String, Boolean>> deleteCricket(@PathVariable int id) throws ResourceNotFoundException 
	{
		
		Cricket cricket = cricRep.findById(id).orElseThrow(() -> new ResourceNotFoundException("Cricket stats Not found"));

		cricRep.delete(cricket);
		Map<String, Boolean> response=new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
		
	}
	
	@PutMapping("/crickets/{id}")
	public ResponseEntity<Cricket> updateCricket(@RequestBody Cricket cricketDetails, @PathVariable int id) throws ResourceNotFoundException 
	{
		Cricket cricket = cricRep.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not be blank"));
       
        
      
        cricket.setChc(cricketDetails.getChc());
        cricket.setCc(cricketDetails.getCc());
        cricket.setCw(cricketDetails.getCw());
        cricket.setCsr(cricketDetails.getCsr());
        cricket.setCeco(cricketDetails.getCeco());
        Cricket updateCricket=cricRep.save(cricket);
        return ResponseEntity.ok(updateCricket);
        
	}
	
	@GetMapping("/crickets/{id}")
	public ResponseEntity<Cricket> getCricketById(@PathVariable int id) throws ResourceNotFoundException 
	{
		  Cricket cricket = cricRep.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not found for Id"));
		 return ResponseEntity.ok(cricket);
	}
	

}
