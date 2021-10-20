CREATE DATABASE IF NOT EXISTS msisdb;
USE msisdb;

DROP TABLE IF EXISTS book;
CREATE TABLE book (
	id int PRIMARY KEY AUTO_INCREMENT ,
    title varchar(50) NOT NULL,
    author varchar(24)  NOT NULL,
    yearPublished int NOT NULL,
    publisher varchar(50) NOT NULL,
    pageCount int NOT NULL,
    msrp INT NOT NULL
    );

INSERT INTO book (id, title, author, yearPublished, publisher, pageCount, msrp) VALUES 
(1, 'The Great Gatsby', 'F Scott Fitzgerald', 2021, "Pandora's Box", 240, 20.00),
(2, 'The Color Purple', 'Alice Walker', 2019, "Penguin Publishing Group", 294, 30.00),
(3, '1984', 'George Orwell ', 1950, "Penguin Publishing Group", 328, 19.49),
(4, 'Lord of The Rings ', 'J.R.R Tolkien', 2012, "HMH Books", 1504, 48.99),
(5, 'Wuthering Heights', 'Emily Bronte', 2017, "Pan Macmillan", 272, 21.49);