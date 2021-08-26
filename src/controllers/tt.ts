import {Request,Response,NextFunction} from 'express'
import {ErrorResponse} from '../utils/errorResponse'
import {asyncHandler} from '../middlewares/async'
import { findSubject,today } from '../middlewares/find'
import { HTMLResponse } from '../utils/htmres'
import { weekNo } from '../models/tt'
//get all posts
export const getTT= asyncHandler(async (request: Request,response: Response,next:NextFunction)=>{
    const date: Date = new Date(Date.now())
    let day: number = date.getDay()
    let hour: number = date.getHours()
    if (request.query.time) {
        let qhour = parseInt(`${request.query.time}`)
        if(qhour<8)
        {
            qhour+=12
        }
        hour=qhour
    }
    if (request.query.day) day = weekNo.has(`${request.query.day}`)?weekNo.get(`${request.query.day}`)||day:day
    
    response.send(HTMLResponse(findSubject({day,hour}),day,hour))
})

export const getDay= asyncHandler(async (request: Request,response: Response,next:NextFunction)=>{
    const date: Date = new Date(Date.now())
    let day: number = date.getDay()
    let hour: number = date.getHours()
    if (request.query.time) hour = parseInt(`${request.query.time}`)
    
    response.send(HTMLResponse(findSubject({day,hour}),day,hour))
})