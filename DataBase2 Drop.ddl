ALTER TABLE Pokoj DROP FOREIGN KEY `Pokoj nalezy do oznaczonej klasy`;
ALTER TABLE Pokoj DROP FOREIGN KEY `Pokoje do posprzatania sa przepisane do sprzataczki`;
ALTER TABLE Rezerwacje DROP FOREIGN KEY `Pokoj jest wypozyczony`;
ALTER TABLE Manager DROP FOREIGN KEY `Pracownik moze pracowac jako Manager`;
ALTER TABLE Recepcjonista DROP FOREIGN KEY `Pracownik moze pracowac jako Recepcjonista`;
ALTER TABLE Sprzataczka DROP FOREIGN KEY `Pracownik moze pracowac jako Sprzataczka`;
ALTER TABLE Rezerwacje DROP FOREIGN KEY `rezerwacja oplacona`;
ALTER TABLE Rezerwacje DROP FOREIGN KEY `Uzytkownik wypozyczyl pokoj`;
DROP TABLE IF EXISTS Klasa;
DROP TABLE IF EXISTS `Klient zalogowany`;
DROP TABLE IF EXISTS Manager;
DROP TABLE IF EXISTS Payment;
DROP TABLE IF EXISTS Pokoj;
DROP TABLE IF EXISTS Pracownik;
DROP TABLE IF EXISTS Recepcjonista;
DROP TABLE IF EXISTS Rezerwacje;
DROP TABLE IF EXISTS Sprzataczka;

