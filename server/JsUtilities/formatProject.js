module.exports = function(projectRecords) {
    let project = projectRecords.reduce((accum, currVal) => {
        if(!accum.id) accum.id = currVal.id;
        if(!accum.pictureLinks) accum.pictureLinks = [];
        accum.pictureLinks.push(currVal.link);
        if(!accum.description) accum.description = currVal.description;
        if(!accum.name) accum.name = currVal.name
        return accum;
    }, {})
    return project;
}