import express from 'express';
import { createBlog, deleteBlog, getAllBlog, getBlog, updateBlog }from '../Controller/Controller.js';
// import {createBlog} from "../Controller/Controller.js"

const router = express.Router();

router.post('/',createBlog);
router.get('/',getAllBlog);
router.get('/:id',getBlog);
router.put('/:id',updateBlog);
router.delete('/:id',deleteBlog);


export default router;