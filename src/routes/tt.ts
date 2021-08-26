import {Router} from 'express'
import {getTT} from '../controllers/tt'
const router:Router=Router()
//all posts
router.route('/').get(getTT)
export const rTT=router