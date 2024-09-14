import { Router } from 'express';
import newPost from '../controllers/newPost.controllers';
import getPost from '../controllers/newPost.controllers';
import searchPost from '../controllers/searchPost.controllers';
import filterPost from '../controllers/filterPost.controllers';

const posts:any = Router();

posts.post('/', newPost);

posts.get('/', getPost);

posts.post('/serach', searchPost);

posts.post('/filter', filterPost);

export default posts;