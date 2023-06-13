const {Router} = require('express');
const postController = require('../controllers/post.controller');

const postRouter = new Router();

postRouter.post('/post', postController.createPost);
postRouter.get('/posts', postController.getPostsByUser);

module.exports = postRouter;
