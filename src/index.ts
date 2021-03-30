import express from 'express'
const app = express()
import router from "./routes/index"

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api', router)

app.listen(5000,()=>{
 console.log('Server on port', 5000);
 
})