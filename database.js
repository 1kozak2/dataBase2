// server/database.js
const mysql = require('mysql2');
const util = require('util');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'hotel_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Convert pool query into promise
const query = util.promisify(pool.query).bind(pool);

const dbOperations = {
  // Rooms operations
  async getRooms() {
    return await query('SELECT * FROM Pokoj');
  },

  async getRoomByNumber(number) {
    return await query('SELECT * FROM Pokoj WHERE Numer = ?', [number]);
  },

  async updateRoomStatus(id, status) {
    return await query('UPDATE Pokoj SET Status = ? WHERE ID = ?', [status, id]);
  },

  // Client operations
  async createClient(clientData) {
    const { Imie, Nazwisko, Numer_telefonu, Email, Haslo } = clientData;
    return await query(
      'INSERT INTO `Klient zalogowany` (Imie, Nazwisko, Numer_telefonu, Email, Haslo) VALUES (?, ?, ?, ?, ?)',
      [Imie, Nazwisko, Numer_telefonu, Email, Haslo]
    );
  },

  // Reservation operations
  async createReservation(reservationData) {
    const { 
      Termin_rezerwacji, 
      Termin_wymeldowania, 
      Wyzywienie, 
      DoZaplaty, 
      PokojID, 
      Klient_zalogowanyID, 
      PaymentPayment_ID 
    } = reservationData;

    return await query(
      'INSERT INTO Rezerwacje (Termin_rezerwacji, Termin_wymeldowania, Wyzywienie, DoZaplaty, PokojID, `Klient zalogowanyID`, PaymentPayment_ID) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [Termin_rezerwacji, Termin_wymeldowania, Wyzywienie, DoZaplaty, PokojID, Klient_zalogowanyID, PaymentPayment_ID]
    );
  },

  // Employee operations
  async getEmployees() {
    return await query('SELECT * FROM Pracownik');
  },

  async addEmployee(employeeData) {
    const { Imie, Nazwisko, PESEL, Adres, Numer_telefonu, Email, Haslo } = employeeData;
    return await query(
      'INSERT INTO Pracownik (Imie, Nazwisko, PESEL, Adres, Numer_telefonu, Email, Haslo) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [Imie, Nazwisko, PESEL, Adres, Numer_telefonu, Email, Haslo]
    );
  },

  // Payment operations
  async createPayment(paymentData) {
    const { PaymentDate, Amount, Method } = paymentData;
    return await query(
      'INSERT INTO Payment (PaymentDate, Amount, Method) VALUES (?, ?, ?)',
      [PaymentDate, Amount, Method]
    );
  }
};

module.exports = dbOperations;