import { config } from "dotenv";
import express, { Express, NextFunction, Request, Response } from "express";
import dbConnection from "./db/db";
import authRouter from "./routes/authentication.route";
import patientRouter from "./routes/patient.route";
import CustomError from "./utils/customError.util";
import errorHandler from "./utils/errorHandler.util";

//Connect Dataase
dbConnection();

//Dotenv
config();

//Create Express App
const app: Express = express();

app.use(express.json());

//Routes
app.use("/api/auth", authRouter);
app.use("/api/patient", patientRouter);

//Root Route
app.get("/", (_, res: Response) => {
  res.json({ message: "Health Record Hub" });
});

//Wrong Path Error Handle
app.all("*", (req: Request, _: any, next: NextFunction) => {
  const err = new CustomError(`${req.url} لم استطيع الوصول الى`, 404);
  next(err);
});

//Error Handle
app.use(errorHandler);

//Running The Server
const port: number = +(process.env.PORT || 8000);
app.listen(port, (): void => {
  console.log(`Server is Running on ${port}`);
});

//Notes
//1- How Patient Get His Password
//2- Page for Test Results
//3- System manager manage patient's accout ?
