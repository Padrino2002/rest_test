import express from "express"
import employeesRoutes from './routes/employes.routes.js'
import indexRoute from './routes/index.routes.js'
import {PORT} from './config.js'

const app =express()
app.use(express.json())

app.use('/api',indexRoute)
app.use('/api',employeesRoutes)
app.use((req,res,next)=>{
    res.status(404).json({
        message:'EndPoint no encontrado'
    })
})

export default app;