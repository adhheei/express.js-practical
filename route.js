import express from 'express'

import { loginUser,signUp } from './controller.js';

const router =express.Router();

router.get('/loginUser',loginUser)
router.get('/signUp',signUp)

export default router