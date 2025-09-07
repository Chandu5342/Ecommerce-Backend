import {Router} from 'express'
import {Login, register} from '../controllers/authController.js'

const router=Router()

router.post('/register',register);
router.post('/login',Login)

export default router