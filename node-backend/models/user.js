const { Pool } = require("pg");
const pool = require("../config/database");

class User {
  static async findByUsername(userName) {

    console.log("username in module: " + userName);
    const checkUsernameQuery = `
      SELECT * from users
      WHERE user_name = $1
    `;

    try {
      const { rows } = await pool.query(checkUsernameQuery, [userName]);

      if (rows.length === 0) {
        console.log("User not found but rows indicate entry:", rows[0]);
        return;
      } else {
        console.log("User found:", rows[0]);
        return rows[0];
      }
    } catch (error) {
      console.error("Error finding user by userName:", error);
      throw error;
    }
  }

  static async addUser(userName, email, status, password) {
    const addUserQuery = `
      INSERT INTO users (user_name, user_email, user_status, user_pwd)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;

    try {
      const { rows } = await pool.query(addUserQuery, [
        userName,
        email,
        status,
        password,
      ]);

      return rows[0];
    } catch (error) {
      console.error("Error adding user:", error);
      throw error;
    }
  }
}

module.exports = User;