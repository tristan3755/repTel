import mongoose from 'mongoose';
import uniqueValidator from "mongoose-unique-validator"

const postArticles=mongoose.Schema({
name:{
    type:String,
    required:true,
    unique:true,
},
description:{
    type:String,
    required:true,
},
urlImgArticle:{
    type:String,
    required:true,
},
categories:{
    type:String,
    required:true,
}
},{timestamps:true})
postArticles.plugin(uniqueValidator)

export const exportSchemaArticles=mongoose.model('articles',postArticles)