UPDATE Klasa SET Cena = ?, LiczbaOsob = ? WHERE KlasaPokoju = ?;
UPDATE `Klient zalogowany` SET Imie = ?, Nazwisko = ?, Numer_telefonu = ?, Email = ?, Haslo = ? WHERE ID = ?;
UPDATE Manager SET PracownikID = ?, dataZatrudnienia = ?, dataZwolnienia = ?, Salary = ? WHERE ;
UPDATE Payment SET PaymentDate = ?, Amount = ?, Method = ? WHERE Payment_ID = ?;
UPDATE Pokoj SET Numer = ?, Status = ?, Description = ?, KlasaKlasaPokoju = ? WHERE ID = ?;
UPDATE Pracownik SET Imie = ?, Nazwisko = ?, PESEL = ?, Adres = ?, Numer_telefonu = ?, Email = ?, Has?o = ? WHERE ID = ?;
UPDATE Recepcjonista SET PracownikID = ?, dataZatrudnienia = ?, dataZwolnienia = ?, Salary = ? WHERE ;
UPDATE Rezerwacje SET Termin_rezerwacji = ?, Termin_wymeldowania = ?, Wyzywienie = ?, DoZaplaty = ? WHERE ID = ? AND PokojID = ? AND `Klient zalogowanyID` = ? AND PaymentPayment_ID = ?;
UPDATE Sprzataczka SET PracownikID = ?, dataZatrudnienia = ?, dataZwolnienia = ?, Salary = ? WHERE ;

