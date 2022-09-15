import { json, urlencoded } from 'express'
import cors from 'cors'
import howOldRouter from "./routes/howOld.js"
import { rateLimiter } from "./middlewares/index.js"

const port = process.env.PORT || 9079

const config = (app) => {
    app.use(cors());
    app.use(urlencoded({ extended: true }))
    app.use(json()); //parse json

   // app.use('/howold', rateLimiter) //rateLimiter middleware limits number of requests per second

    app.use('/howold', rateLimiter, howOldRouter) //rateLimiter middleware limits number of requests per second

    app.use('*', (req, res)=>res.send('Route does not exist'))

    app.listen(port, ()=>{
        console.log(`This app is listening on port ${port}`)
    })
}

export default config;
