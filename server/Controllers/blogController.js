const moment = require('moment');

function formatDate(post) {
    post.formatted_date = moment(post.created_date).format('MMMM Do YYYY')
    return post;
}

module.exports = {
    getAllPosts: async function(req, res) {
        let db = req.app.get('db')
        try { 
            let posts = await db.get_all_posts()
            posts = posts.map( post => {
                formatDate(post)
                return post
            })
            res.send(posts)
        }
        catch(err) {
            res.send(err)
        }
    }
}