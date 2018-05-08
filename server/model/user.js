//import { Mongoose, Schema } from "mongoose";

var mongoose = require("mongoose");

var Schema=mongoose.Schema;

var obj={
    userphone:String,
    password:String


}



var model = mongoose.model("mtimeuser ",new Schema(obj));

module.exports=model;