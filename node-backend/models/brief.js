const { Pool } = require("pg");
const pool = require("../config/database");

class Brief {
  static async storeBrief(
    user,
    projectName,
    projectType,
    dueDate,
    department,
    priority,
    description
  ) {
    try {


      // Insert brief using the obtained userId
      const insertBriefQuery = `
        INSERT INTO briefs (user_id, project_name, project_type, due_date, department, priority, description, progress)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *;
      `;

      const status = 'Created'

      const { rows } = await pool.query(insertBriefQuery, [
        user,
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

  static async returnBriefs(userId, status){

    switch(status){
      case 'client':
        try {
          // Get user briefs based on userId
          const getBriefs = 'SELECT * FROM briefs where user_id = $1';
          const { rows } = await pool.query(getBriefs, [userId]);
    
          if (rows.length === 0) {
            console.error('Error: Breifs not returned');
            return false;
          }else{     
            return rows;
          }
        } catch (error) {
          console.error('Error whilst getting briefs:', error);
          throw error; // Rethrow the error to be caught by the calling code
        };
      break;
      case 'member':
        try {
          // Get brief ids based on userId
          const getAssignedBriefIds = 'SELECT brief_id FROM briefs_allocation WHERE assigned_user = $1';
          const { rows } = await pool.query(getAssignedBriefIds, [userId]);
      
          // Extract the array of brief_ids from the result rows
          const briefIds = rows.map(row => row.brief_id);
      
          // Check if the array of brief_ids is not empty before executing the next query
          if (briefIds.length > 0) {
            // get brief details based on brief ids
            const getAssignedBriefs = 'SELECT * FROM briefs WHERE brief_id IN ($1)';
            const { rows: assignedBriefs } = await pool.query(getAssignedBriefs, [briefIds]);
      
            if (assignedBriefs.length === 0) {
              console.error('Error: Briefs not returned');
              return false;
            } else {
              // Now, assignedBriefs contains an array of brief details matching the brief_ids
              return assignedBriefs;
            }
          } else {
            console.error('Error: Brief IDs not returned');
            return false;
          }
        } catch (error) {
          console.error('Error fetching assigned briefs:', error);
          return false;
        }
      break;
      case 'manager':
        // get departmet
        const getDepartment = "SELECT department from managers where id =$1";
        const {rows} = await pool.query(getDepartment, [userId]);

        // get all briefs assigned to the deepartment manager
        const getBriefs = "SELECT * from briefs where department = $1"
        const { rows : departMentBrief} = await pool.query.apply(getBriefs, [rows]);
      break;

    }
  }
}

module.exports = Brief;
