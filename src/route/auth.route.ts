import express from 'express';
import authenticateUser from '../controller/auth.controller';

const router = express.Router();

router.post('/', authenticateUser);

export default router;