CREATE TABLE Klasa (KlasaPokoju varchar(32) NOT NULL, Cena int(5) NOT NULL, LiczbaOsob int(1) NOT NULL, PRIMARY KEY (KlasaPokoju));
CREATE TABLE `Klient zalogowany` (ID int(6) NOT NULL AUTO_INCREMENT, Imie varchar(15) NOT NULL, Nazwisko varchar(25) NOT NULL, Numer_telefonu varchar(12), Email varchar(30) NOT NULL, Has?o varchar(32) NOT NULL, PRIMARY KEY (ID));
CREATE TABLE Manager (PracownikID int(6) NOT NULL, dataZatrudnienia date NOT NULL, dataZwolnienia date, Salary decimal(5, 2) NOT NULL);
CREATE TABLE Payment (Payment_ID int(10) NOT NULL AUTO_INCREMENT, PaymentDate date NOT NULL, Amount decimal(10, 2) NOT NULL, Method varchar(32), PRIMARY KEY (Payment_ID));
CREATE TABLE Pok�j (ID int(6) NOT NULL AUTO_INCREMENT, Numer int(3) NOT NULL UNIQUE, Status varchar(24) NOT NULL, Description varchar(255), KlasaKlasaPokoju varchar(32) NOT NULL, PRIMARY KEY (ID));
CREATE TABLE Pracownik (ID int(6) NOT NULL AUTO_INCREMENT, Imie varchar(15) NOT NULL, Nazwisko varchar(25) NOT NULL, PESEL int(11) NOT NULL, Adres varchar(20) NOT NULL, Numer_telefonu varchar(12), Email varchar(30) NOT NULL, Has?o varchar(32) NOT NULL, PRIMARY KEY (ID));
CREATE TABLE Recepcjonista (PracownikID int(6) NOT NULL, dataZatrudnienia date NOT NULL, dataZwolnienia date, Salary decimal(5, 2) NOT NULL);
CREATE TABLE Rezerwacje (ID int(6) NOT NULL UNIQUE, Termin_rezerwacji date NOT NULL, Termin_wymeldowania date NOT NULL, Wyzywienie varchar(15), DoZaplaty decimal(6, 2) NOT NULL, Pok�jID int(6) NOT NULL, `Klient zalogowanyID` int(6) NOT NULL, PaymentPayment_ID int(10) NOT NULL, PRIMARY KEY (ID, Pok�jID, `Klient zalogowanyID`, PaymentPayment_ID));
CREATE TABLE Sprz?taczka (PracownikID int(6) NOT NULL, dataZatrudnienia date NOT NULL, dataZwolnienia date, Salary decimal(5, 2) NOT NULL);
ALTER TABLE Pok�j ADD CONSTRAINT `Pokoj nalezy do oznaczonej klasy` FOREIGN KEY (KlasaKlasaPokoju) REFERENCES Klasa (KlasaPokoju);
ALTER TABLE Pok�j ADD CONSTRAINT `Pokoje do posprzatania sa przepisane do sprzataczki` FOREIGN KEY () REFERENCES Sprz?taczka ();
ALTER TABLE Rezerwacje ADD CONSTRAINT `Pok�j jest wypo?yczony` FOREIGN KEY (Pok�jID) REFERENCES Pok�j (ID);
ALTER TABLE Manager ADD CONSTRAINT `Pracownik mo?e pracowa? jako Manager` FOREIGN KEY (PracownikID) REFERENCES Pracownik (ID);
ALTER TABLE Recepcjonista ADD CONSTRAINT `Pracownik mo?e pracowa? jako Recepcjonista` FOREIGN KEY (PracownikID) REFERENCES Pracownik (ID);
ALTER TABLE Sprz?taczka ADD CONSTRAINT `Pracownik mo?e pracowa? jako Sprzataczka` FOREIGN KEY (PracownikID) REFERENCES Pracownik (ID);
ALTER TABLE Rezerwacje ADD CONSTRAINT `rezerwacja oplacona` FOREIGN KEY (PaymentPayment_ID) REFERENCES Payment (Payment_ID);
ALTER TABLE Rezerwacje ADD CONSTRAINT `Uzytkownik wypozyczyl pokoj` FOREIGN KEY (`Klient zalogowanyID`) REFERENCES `Klient zalogowany` (ID);

