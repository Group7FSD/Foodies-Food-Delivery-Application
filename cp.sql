/* Create The Foodies Database*/
Create database Capstone_Project;

/* This Query is for use that database*/
use Capstone_Project;

/* This Sql query creates he table Customer details with given 
fields and this table is  mapped to entity class 'Customer' in Spring Application*/
create table customer_details(customer_id int primary key auto_increment NOT NULL, first_name varchar(50), last_name varchar(50),
email varchar(50));
/* This Sql query creates he table Address details with given 
fields and this table is  mapped to entity class 'Address' in Spring Application*/

create table address_details(address_id int primary key auto_increment NOT NULL, city varchar(10), country varchar(20),
state varchar(20), street varchar(20), zipcode varchar(30));
/* This Sql query creates he table Order details with given 
fields and this table is  mapped to entity class 'Order' in Spring Application*/

create table order_details(order_id int primary key auto_increment NOT NULL, total_quantity int, total_price double, address_id
 int , customer_id int, foreign key(address_id) references address_details(address_id),
 foreign key(customer_id) references customer_details(customer_id));
 
 /* User Login Details Table Creation */
create table login_details(user_id int primary key auto_increment NOT NULL,first_name varchar(30),
 last_name varchar(30),email varchar(30),user_password varchar(30));
 
 /* Select query to view the table */
select * from address_details;
select * from Customer_details;
select * from order_details;
select * from login_details;

/* Delete Query to delete all the rows*/
 delete from order_details where order_id>0;
 delete from customer_details where customer_id>0;
 delete from address_details where address_id>0;
 delete from login_details where user_id>0;

/*Drop Table to drop All the tables*/
drop table order_details;
drop table address_details;
drop table customer_details;
drop table login_details;