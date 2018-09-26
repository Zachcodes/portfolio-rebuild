const formatProject = require('../JsUtilities/formatProject');

module.exports = {
    async getProject(req, res) {
        let db = req.app.get('db')
        let {projectId} = req.params
        let project = await db.getProjectId({projectId})
        let formattedProject = formatProject(project)
        let techUsed = await db.getTechUsed({projectId})
        formattedProject.techUsed = techUsed;
        res.status(200).send(formattedProject)
    },
    async getAllProjects(req, res) {
        let db = req.app.get('db')
        let projects = await db.getProjects()
        res.status(200).send(projects)
    }
}