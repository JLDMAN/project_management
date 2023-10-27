const { Pool } = require("pg");
const pool = require("../config/database");

class User {
    async findByEmail(email){
        const checkEmailQuery = `
        SELECT * from users
        WHERE user_email = $1
        `;

        try {
            // check email existance
            const {rows} = await pool.query(checkEmailQuery, [email]);

            if(rows.length === 0){
                return false;
            } else {
                console.log("User found:", rows[0]);
                return true;
            }
        } catch (error) {
            console.error("Error finding user by email:", error);
            throw error;
        }
    }

    static async addUser( name, email, status, password) {
        const addUserQuery = `
          INSERT INTO users (user_name, user_email, user_status, user_pwd)
          VALUES ($1, $2, $3, $4)
          RETURNING *
        `;
    
        try {
          const { rows } = await pool.query(addUserQuery, [
            name,
            email,
            status,
            password,
          ]);

          return true;
        } catch (error) {
          console.error("Error adding user:", error);
          throw error;
          return false;
        }
    }
}

module.exports = User;