CREATE DATABASE chat;

USE chat;

CREATE TABLE user(
  userId INT NOT NULL AUTO_INCREMENT,
  userName VARCHAR(100) NOT NULL,
  PRIMARY KEY (userId)
);

-- Create table for Room

CREATE TABLE room(
  roomId INT NOT NULL AUTO_INCREMENT,
  roomName VARCHAR(200) NOT NULL,
  PRIMARY KEY (roomId)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  userId INT NOT NULL,
  room INT NOT NULL,
  text VARCHAR(1000) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (userId) REFERENCES user(userId),
  FOREIGN KEY (room) REFERENCES room(roomId)
);

/* Create other tables and define schemas for them here! */

-- Create table for user




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

