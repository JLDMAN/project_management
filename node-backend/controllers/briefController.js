const Brief =  require("../models/brief");

const briefController = {
    async createBrief(req, res){

        const { userName, projectName, projectType, dueDate, departement, priority, description} = req.body;
        try {
            const brief = await Brief.storeBrief(
                userName,
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
        } catch(error) {
            console.error('Error creating brief:', error);
            res.status(500).json({ 
                error: 'Internal Server Error',
                status: 'false',
            });
        }
    }
}

module.exports = briefController;