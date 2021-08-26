import express, {Application, Request, Response,NextFunction} from 'express'
import morgan from 'morgan'
import http from 'http';
import {errorHandler} from './middlewares/errors'
//import {seedData,clearData} from './test'
//load configs
const app:Application= express()
//routes
import {rTT} from './routes/tt'
//middlewares
app.use(morgan('dev'))
app.use(express.json())


app.use('/', rTT)


const PORT= process.env.PORT||4500

//error handling
app.use(errorHandler)
/** Create HTTP server. */
const server = http.createServer(app);
server.listen(PORT,()=>{
    console.log(`Flying ✈  ✈  ✈  on ${PORT}`)
});

//handle rejections
process.on('unhandledRejection',(err:any,promise:any)=>{
    console.log(`error!! 😞😞 ${err.name}: ${err.message}`)
    //close and exit
    server.close(()=>process.exit(1))
})