import express from "express";
import dotenv from "dotenv";
import { connect } from "mongoose"
import cors from "cors";
import indexRoute from "./routes/indexRoute.js"


dotenv.config()
const app = express();
app.use(cors())
app.use(express.json())
app.use("/",indexRoute)

connect(process.env.DB_URL, (err)=>{
    if (err) return;
    app.listen(3000,()=>console.log(`server listening on port 3000`))
})