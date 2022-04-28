import mongoose from 'mongoose';
import uniqueValidator from "mongoose-unique-validator"

const postEmployees=mongoose.Schema({
name:{
    type:String,
    required:true,
    unique:true,
},
description:{
    type:String,
    required:true,
},
urlImg:{
    type:String,
    required:true,
},
},{timestamps:true})
postEmployees.plugin(uniqueValidator)

export const exportSchemaEmployees=mongoose.model('employees',postEmployees)