import { Router } from 'express';
import newPost from '../controllers/newPost.controllers';

const posts:any = Router();

posts.post('/', newPost);

export default posts;