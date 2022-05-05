import express from "express";
export const routerArticles=express.Router()
import {exportSchemaArticles} from "../models/articles.js"
import * as fs from 'fs'
import path from "path"
import {exportMulter} from "../middlewares/multerArticle.js"
import {authentification} from "../middlewares/auth.js"

routerArticles.post('/add',exportMulter,(req, res) => {

    const newArticle = new exportSchemaArticles({
        name:req.body.name,
        description:req.body.description,
        urlImgArticle:`${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        categories:req.body.categories
    })
    newArticle.save().then(articleSaved=>{
if(!articleSaved){
    res.status(401).json({
       code:500,error: "problème ajout"
    })
}else{
    res.send(articleSaved)
}
}).catch(error=>{
    res.send(error).status(500)
})
})