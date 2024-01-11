const Brief = require("../models/brief");

const briefController = {
  async createBrief(req, res) {
    const {
      user,
      projectName,
      projectType,
      dueDate,
      departement,
      priority,
      description,
    } = req.body;
    try {
      const brief = await Brief.storeBrief(
        user,
        projectName,
        projectType,
        dueDate,
        departement,
        priority,
        description
      );

      res.status(201).json({
        message: "Brief created successfully",
        status: "success",
      });
    } catch (error) {
      console.error("Error creating brief:", error);
      res.status(500).json({
        error: "Internal Server Error",
        status: "false",
      });
    }
  },

  async getBriefs(req, res) {
    const { userId, status } = req.body;
    
    try {
      const briefs = await Brief.returnBriefs(userId, status);

      if (briefs) {
        res.status(201).json({
          message: "Briefs returned successfully",
          status: "success",
          briefs: briefs
        });
      }
    } catch (error) {
      console.error("Error fetching briefs:", error);
      res.status(500).json({
        error: "Internal Server Error",
        status: "false",
      });
    }
  },
};

module.exports = briefController;
