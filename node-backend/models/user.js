const { Pool } = require("pg");
const pool = require("../config/database");

class User {
  static async findByUsername(userName) {
    const checkUsernameQuery = `
      SELECT * from users
      WHERE user_name = $1
    `;

    try {
      const { rows } = await pool.query(checkUsernameQuery, [userName]);

      if (rows.length === 0) {
        console.log("User not found");
        return;
      } else {
        return rows[0];
      }
    } catch (error) {
      console.error("Error finding user by userName:", error);
      throw error;
    }
  }

  static async addUser(userName, email, status, password, department) {
    console.log("departement recieved in model" + department);
    const addUserQuery = `
      INSERT INTO users (user_name, user_email, user_status, user_pwd)
      VALUES ($1, $2, $3, $4)
      RETURNING user_id, user_status
    `;

    try {
      const { rows } = await pool.query(addUserQuery, [
        userName,
        email,
        status,
        password
      ]);

      const insertedUserId = rows[0].user_id;
      const userStatus = rows[0].user_status;

      // Check if the user is a manager
      if (userStatus === 'manager') {
        const addManagerQuery = `
          INSERT INTO managers (id, name, department)
          VALUES ($1, $2, $3)
          RETURNING *
        `;

        // Insert into managers table with the same user_id as in users table
        const managerRows = await pool.query(addManagerQuery, [
          insertedUserId,
          userName,
          department,
        ]);

        return { user: rows[0], manager: managerRows.rows[0] };
      }

      return { user: rows[0], manager: null };
    } catch (error) {
      console.error("Error adding user:", error);
      throw error;
    }
  }

  static async retrieveTeamList() {
    const getUserList = `
    SELECT user_name, user_id
    FROM users
    WHERE user_status = 'member'
  `;

    try {
      const { rows: teamList } = await pool.query(getUserList);
      return teamList;
    } catch (error) {
      console.error("Error getting team list:", error);
      throw error;
    }
  }
}

module.exports = User;
