ALTER TABLE Pokój DROP FOREIGN KEY `Pokoj nalezy do oznaczonej klasy`;
ALTER TABLE Pokój DROP FOREIGN KEY `Pokoje do posprzatania sa przepisane do sprzataczki`;
ALTER TABLE Rezerwacje DROP FOREIGN KEY `Pokój jest wypo?yczony`;
ALTER TABLE Manager DROP FOREIGN KEY `Pracownik mo?e pracowa? jako Manager`;
ALTER TABLE Recepcjonista DROP FOREIGN KEY `Pracownik mo?e pracowa? jako Recepcjonista`;
ALTER TABLE Sprz?taczka DROP FOREIGN KEY `Pracownik mo?e pracowa? jako Sprzataczka`;
ALTER TABLE Rezerwacje DROP FOREIGN KEY `rezerwacja oplacona`;
ALTER TABLE Rezerwacje DROP FOREIGN KEY `Uzytkownik wypozyczyl pokoj`;
DROP TABLE IF EXISTS Klasa;
DROP TABLE IF EXISTS `Klient zalogowany`;
DROP TABLE IF EXISTS Manager;
DROP TABLE IF EXISTS Payment;
DROP TABLE IF EXISTS Pokój;
DROP TABLE IF EXISTS Pracownik;
DROP TABLE IF EXISTS Recepcjonista;
DROP TABLE IF EXISTS Rezerwacje;
DROP TABLE IF EXISTS Sprz?taczka;

