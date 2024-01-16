package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Cricket;
@Repository
public interface CricketRepository extends JpaRepository<Cricket, Integer> {

	

}

