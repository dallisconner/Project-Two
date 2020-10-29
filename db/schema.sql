DROP DATABASE IF EXISTS spooky_db;
CREATE DATABASE  spooky_db;

USE spooky_db;

CREATE TABLE movies
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(60) NOT NULL,
    all_ages BOOLEAN default FALSE,
	PRIMARY KEY (id)
);

CREATE TABLE candies
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(60) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE drinks
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(60) NOT NULL,
    alcoholic BOOLEAN default FALSE,
	PRIMARY KEY (id)
);
