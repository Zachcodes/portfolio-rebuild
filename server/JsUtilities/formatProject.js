module.exports = function(projectRecords) {
    let project = projectRecords.reduce((accum, currVal) => {
        if(!accum.id) accum.id = currVal.id;
        if(!accum.pictureLinks) accum.pictureLinks = [];
        let linkObj = {}
        linkObj.link = currVal.link
        linkObj.type_id = currVal.type_id 
        linkObj.project_image_id = currVal.project_image_id
        accum.pictureLinks.push(linkObj);
        if(!accum.description) accum.description = currVal.description;
        if(!accum.name) accum.name = currVal.name
        return accum;
    }, {})
    return project;
}