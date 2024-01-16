package com.example.demo.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Cricket_10")
public class Cricket {

	@Id
	private int id;
	
	@Column(name="Name")
	private String cname;
	
	@Column(name="Surname")
	private String csurname;
	
	@Column(name="50")
	private String chc;
	
	@Column(name="100")
	private String cc;
	
	@Column(name="Wickets")
	private String cw;
	
	@Column(name="Strike Rate")
	private String csr;
	
	@Column(name="Eco")
	private String ceco;
	
	

	public Cricket() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	public Cricket(int id, String cname, String csurname, String chc, String cc, String cw, String csr, String ceco) {
		super();
		this.id = id;
		this.cname = cname;
		this.csurname = csurname;
		this.chc = chc;
		this.cc = cc;
		this.cw = cw;
		this.csr = csr;
		this.ceco = ceco;
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCname() {
		return cname;
	}

	public void setCname(String cname) {
		this.cname = cname;
	}

	public String getCsurname() {
		return csurname;
	}

	public void setCsurname(String csurname) {
		this.csurname = csurname;
	}

	public String getChc() {
		return chc;
	}

	public void setChc(String chc) {
		this.chc = chc;
	}

	public String getCc() {
		return cc;
	}

	public void setCc(String cc) {
		this.cc = cc;
	}


	public String getCw() {
		return cw;
	}


	public void setCw(String cw) {
		this.cw = cw;
	}


	public String getCsr() {
		return csr;
	}


	public void setCsr(String csr) {
		this.csr = csr;
	}


	public String getCeco() {
		return ceco;
	}


	public void setCeco(String ceco) {
		this.ceco = ceco;
	}
	
	
	
	
}
