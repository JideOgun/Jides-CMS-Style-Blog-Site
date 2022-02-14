const Developer = require('./Developer');
const Post = require('./Post');
const Comment = require('./Comment');


// creating associations 
Developer.hasMany(Post, {
    foreignKey: 'dev_id'
});

Post.belongsTo(Developer, {
    foreignKey: 'dev_id'
});

Developer.hasMany(Comment, {
    foreignKey: 'dev_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Comment.belongsTo(Developer, {
    foreignKey: 'dev_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

module.exports = { Developer, Post, Comment };