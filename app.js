import express from "express"
const app=express()
import dotenv from "dotenv"
import bodyparser from "body-parser"
import path from "path"
import cors from "cors"
import {connectDb} from "./config/database.js"
 import {routerEmployees} from "./routers/employees.js"
 import {routerUser} from "./routers/user.js"
 import {routerArticles} from "./routers/article.js"

dotenv.config({path:"./config/config.env"})

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

connectDb()

app.use(cors())
app.use('/employee',routerEmployees)
app.use('/users',routerUser)
app.use('/articles',routerArticles)
app.listen(process.env.PORT || 4000)