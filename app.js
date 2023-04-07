import express from 'express';
import dotenv from 'dotenv';
import { route as todoRoute } from "./routes/todo.route.js";
import { route as userRoute } from './routes/user.route.js'


dotenv.config();

const app = express();

app.use(express.json())

app.use("/todo", todoRoute)
app.use('/users', userRoute)

app.listen(process.env.PORT, ()=>{
    console.log("Connected successfuly");
})
