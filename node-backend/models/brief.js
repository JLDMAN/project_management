const { Pool } = require("pg");
const pool = require("../config/database");

class Brief {
  static async storeBrief(
    userName,
    projectName,
    projectType,
    dueDate,
    department,
    priority,
    description
  ) {
    try {
      // Step 1: Get user_id based on userName
      const getUserIdQuery = 'SELECT user_id FROM users WHERE user_name = $1';
      const userResult = await pool.query(getUserIdQuery, [userName]);
      const userId = userResult.rows[0]?.user_id;

      if (!userId) {
        console.error('Error: User not found for userName:', userName);
        return false;
      }

      // Step 2: Insert brief using the obtained userId
      const insertBriefQuery = `
        INSERT INTO briefs (user_id, project_name, project_type, due_date, department, priority, description, progress)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *;
      `;

      const status = 'Created'

      const { rows } = await pool.query(insertBriefQuery, [
        userId,
        projectName,
        projectType,
        dueDate,
        department,
        priority,
        description,
        status
      ]);

      if (rows.length === 0) {
        console.error('Error: Brief not inserted');
        return false;
      }else{
        return true;
      }
    } catch (error) {
      console.error('Error in storeBrief:', error);
      throw error; // Rethrow the error to be caught by the calling code
    }
  }
}

module.exports = Brief;
