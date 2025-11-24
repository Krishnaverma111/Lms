const mongoose = require("mongoose")
const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const route = require("./route/route")

const app = express()
app.use(express.json())
const PORT = 5000;

mongoose.connect(process.env.MongoUrl)

.then(()=>{console.log(`mongo db connected `)})
.catch((e)=>{console.log(`mongodb error ${e}`)})

app.use("/",route)

app.listen(PORT,()=>{console.log(`this server is running on this port ${PORT} `)})
