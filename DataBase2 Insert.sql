INSERT INTO Klasa(KlasaPokoju, Cena, LiczbaOsob) VALUES (?, ?, ?);
INSERT INTO `Klient zalogowany`(ID, Imie, Nazwisko, Numer_telefonu, Email, Has?o) VALUES (?, ?, ?, ?, ?, ?);
INSERT INTO Manager(PracownikID, dataZatrudnienia, dataZwolnienia, Salary) VALUES (?, ?, ?, ?);
INSERT INTO Payment(Payment_ID, PaymentDate, Amount, Method) VALUES (?, ?, ?, ?);
INSERT INTO Pokój(ID, Numer, Status, Description, KlasaKlasaPokoju) VALUES (?, ?, ?, ?, ?);
INSERT INTO Pracownik(ID, Imie, Nazwisko, PESEL, Adres, Numer_telefonu, Email, Has?o) VALUES (?, ?, ?, ?, ?, ?, ?, ?);
INSERT INTO Recepcjonista(PracownikID, dataZatrudnienia, dataZwolnienia, Salary) VALUES (?, ?, ?, ?);
INSERT INTO Rezerwacje(ID, Termin_rezerwacji, Termin_wymeldowania, Wyzywienie, DoZaplaty, PokójID, `Klient zalogowanyID`, PaymentPayment_ID) VALUES (?, ?, ?, ?, ?, ?, ?, ?);
INSERT INTO Sprz?taczka(PracownikID, dataZatrudnienia, dataZwolnienia, Salary) VALUES (?, ?, ?, ?);

