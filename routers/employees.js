import express from "express";
export const routerEmployees=express.Router()
import {exportSchemaEmployees} from "../models/employees.js"
import * as fs from 'fs'
import path from "path"
import {exportMulter} from "../middlewares/multer.js"
import {authentification} from "../middlewares/auth.js"

routerEmployees.post('/add',exportMulter,(req, res) => {

    const newEmployees = new exportSchemaEmployees({
        name:req.body.name,
        description:req.body.description,
        urlImg:`${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    })
    newEmployees.save().then(employeeSave=>{
if(!employeeSave){
    res.status(401).json({
       code:500,error: "problème ajout"
    })
}else{
    res.send(employeeSave)
}
}).catch(error=>{
    res.send(error).status(500)
})
})