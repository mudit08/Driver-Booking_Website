package com.app.pojos;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="driver")
public class Driver {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer drivId;
	private String  dFirstName;
	private String  dLastName;
	@Column(length =30,unique=true)
	private String email;
	private String password;
//	@DateTimeFormat(pattern = "dd/MM/yyyy")
//	private LocalDate dob;
	@Column(length = 300)
	private String address;
	private int pincode;
	@Column(length =30,unique=true)
	private String licenceNo;
	@Column(length =30,unique=true)
	private String adharNo;
	@Enumerated(EnumType.STRING)
	private CarType expInCarType;
	@Column 
	private boolean status;
	private double phoneNo;
	
	public Driver() {
		super();
	}

	public Driver(Integer drivId, String dFirstName, String dLastName, String email,String password, String address, int pincode,
			String licenceNo, String adharNo, CarType expInCarType, boolean status ,int phoneNo) {
		super();
		this.drivId = drivId;
		this.dFirstName = dFirstName;
		this.dLastName = dLastName;
		this.email=email;
		this.password=password;
		//this.dob = dob;
		this .address = address;
		this.pincode = pincode;
		this.licenceNo = licenceNo;
		this.adharNo = adharNo;
		this.expInCarType = expInCarType;
		this.status = status;
		this.phoneNo=phoneNo;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public double getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(double phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getDrivId() {
		return drivId;
	}

	public void setDrivId(Integer drivId) {
		this.drivId = drivId;
	}

	public String getdFirstName() {
		return dFirstName;
	}

	public void setdFirstName(String dFirstName) {
		this.dFirstName = dFirstName;
	}

	public String getdLastName() {
		return dLastName;
	}

	public void setdLastName(String dLastName) {
		this.dLastName = dLastName;
	}

//	public LocalDate getDob() {
//		return dob;
//	}
//
//	public void setDob(LocalDate dob) {
//		this.dob = dob;
//	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public String getLicenceNo() {
		return licenceNo;
	}

	public void setLicenceNo(String licenceNo) {
		this.licenceNo = licenceNo;
	}

	public String getAdharNo() {
		return adharNo;
	}

	public void setAdharNo(String adharNo) {
		this.adharNo = adharNo;
	}

	public CarType getExpInCarType() {
		return expInCarType;
	}

	public void setExpInCarType(CarType expInCarType) {
		this.expInCarType = expInCarType;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Driver [DrivId=" + drivId + ", dFirstName=" + dFirstName + ", dLastName=" + dLastName + ",Email"+email
				+ ", Address=" + address + ", pincode=" + pincode + ", licenceNo=" + licenceNo + ", adharNo=" + adharNo
				+ ", expInCarType=" + expInCarType + ", status=" + status + ",Phone"+phoneNo+"]";
	}
	
	
	
	
	
	
}
