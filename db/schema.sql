DROP DATABASE IF EXISTS spooky_db;
CREATE DATABASE  spooky_db;

USE spooky_db;

<<<<<<< HEAD
CREATE TABLE favorites
(
    id
        AUTO_INCREMENT
    NUMBER,
username VARCHAR
    (100),
drink
VARCHAR
    (100),
snack
VARCHAR
    (100),
movie_id
VARCHAR
    (100)
)

=======
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
>>>>>>> 0ba22e217b324b40d0522e81b702f021c59ec900
