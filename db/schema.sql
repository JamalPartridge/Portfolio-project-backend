DROP DATABASE IF EXISTS portfolio_project;
CREATE DATABASE portfolio_project;

\c portfolio_project;

CREATE TABLE agents (
   id SERIAL PRIMARY KEY,
   name TEXT NOT NULL,
   role TEXT NOT NULL,
   ability1 VARCHAR(30),
   ability2 VARCHAR(30),
   ability3 VARCHAR(30),
   ultimate VARCHAR(30),
   isPlayableCharacter BOOLEAN,
   image TEXT DEFAULT 'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image'
);