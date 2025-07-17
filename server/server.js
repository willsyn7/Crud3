import express from 'express';
import {checkDatabaseConnection} from './models/db.js';
import spaceRoute from './routes/spacex.js';


const APP = express();
const PORT = 8080 ;

console.log(`adsf`)
checkDatabaseConnection()


APP.get('/',(req,res) =>{
    `Server is up`
})

APP.use('/api/spaceX', spaceRoute); 


APP.use((req,res)=>{
    res.status(404).send(`Error code 404`);
})
APP.use((err,req,res,next)=> {
     const defaultError = {
        log: `Have Reached Global Eror Handler`,
        status : 400,
        message : {err : `Error Code 500 you have reached global error ahandler`}
     }
     const errorObj = Object.assign({},defaulterror,err);
     console.log(errorObj);
     return res.status(errorObj.status).json(errorObj.message)
})






APP.listen(PORT, ()=>{
    console.log(`Port is running on ${PORT}`)
})