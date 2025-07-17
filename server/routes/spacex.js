import express  from 'express';
import spaceController from '../controller/SpaceController.js';
const router = express.Router();

router.get('/getlatest', spaceController.getLatest);


export default router 


