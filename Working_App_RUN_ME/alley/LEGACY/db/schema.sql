CREATE DATABASE alley;
USE alley;


Create table Buyer (
	Buyer_ID Int NOT NULL AUTO_INCREMENT,
	First_Name Char(40) NOT NULL,
	Last_Name Char(40) NOT NULL,
	Address Varchar(60) NOT NULL,
	City Char(40) NOT NULL,
	State Char(2) NOT NULL,
	Zip Int NOT NULL,
	Phone Varchar(20) NOT NULL,
	Email Varchar(60) NOT NULL,
 Primary Key (Buyer_ID)
) ENGINE = MyISAM;

Create table Seller (
	Seller_ID Int NOT NULL AUTO_INCREMENT,
	First_Name Char(40) NOT NULL,
	Last_Name Char(40) NOT NULL,
	Address Varchar(60) NOT NULL,
	City Char(40) NOT NULL,
	State Char(2) NOT NULL,
	Zip Int NOT NULL,
	Phone Varchar(20) NOT NULL,
	Email Varchar(50) NOT NULL,
 Primary Key (Seller_ID)
) ENGINE = MyISAM;

Create table Products (
	Product_Id Int NOT NULL AUTO_INCREMENT,
	Product_Name Varchar(80) NOT NULL,
	Category Char(40) NOT NULL CHECK (Category IN ('laptop', 'desktop', 'smartphone', 'smartpad', 'gaming computer', 'gaming console', 'speakers', 'home theater', 
    'calculators', 'headphones', 'accessories')),
	Picture Varchar(500) NOT NULL,
	Description Varchar(500),
	Price Decimal(10,2) NOT NULL,
	Time_Posted Timestamp NOT NULL,
	Time_Purchased Timestamp,
	Buyer_ID Int NOT NULL,
	Seller_ID Int NOT NULL,
    

 Primary Key (Product_Id,Buyer_ID,Seller_ID),
 Index IX_Buyer_to_Product (Buyer_ID),
 Foreign Key (Buyer_ID) references Buyer (Buyer_ID) on delete  restrict on update  restrict,
 Foreign Key (Seller_ID) references Seller (Seller_ID) on delete  restrict on update  restrict
) ENGINE = MyISAM;