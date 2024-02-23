import { config } from "dotenv";
import express, { Express, NextFunction, Request, Response } from "express";
import dbConnection from "./db/db";
import CustomError from "./utils/customError.util";
import errorHandler from "./utils/errorHandler.util";

dbConnection()

config()

const port :number = +(process.env.PORT || 8000)

const app :Express = express()

app.get("/",(_,res:Response)=>{
  res.json({message:"Health Record Hub"})
})

app.all("*",(req:Request,_:any,next:NextFunction)=>{
  const err = new CustomError(`Can't find ${req.url} on the server!`,404)
  next(err)
})

app.use(errorHandler)

app.listen(port,():void=>{
  console.log(`Server is Running on ${port}`);
})