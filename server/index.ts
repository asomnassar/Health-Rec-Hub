import cors from "cors";
import { config } from "dotenv";
import express, { Express, NextFunction, Request, Response } from "express";
import dbConnection from "./db/db";
import appointmentRouter from "./routes/appointment.route";
import authRouter from "./routes/authentication.route";
import medicalRecordRouter from "./routes/medicalRecord.route";
import medicationRouter from "./routes/medication.route";
import patientRouter from "./routes/patient.route";
import prescriptionRouter from "./routes/prescription.route";
import procedureRouter from "./routes/procedure.route";
import testResultRouter from "./routes/testResult.route";
import userRouter from "./routes/user.route";
import CustomError from "./utils/customError.util";
import errorHandler from "./utils/errorHandler.util";

//Connect Dataase
dbConnection();

//Dotenv
config();

//Create Express App
const app: Express = express();

app.use(express.json());

//Allow All CORS Request
app.use(
  cors({
    origin: "*",
  })
);

//Routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/patient", patientRouter);
app.use("/api/appointment", appointmentRouter);
app.use("/api/medicalRecord", medicalRecordRouter);
app.use("/api/procedure", procedureRouter);
app.use("/api/prescription", prescriptionRouter);
app.use("/api/testResult", testResultRouter);
app.use("/api/medication", medicationRouter);

//Root Route
app.get("/", (_, res: Response) => {
  const treasureMap = {
    message: "🗺️ Welcome to the Health Record Hub API! 🏴‍☠️",
    clues: [
      "🌴 Follow the path of 'api/' to start the journey.",
      "🦜 Look out for the 'X marks the spot' at each endpoint!",
    ],
  };
  res.status(200).json(treasureMap);
});

//Wrong Path Error Handle
app.all("*", (req: Request, _: any, next: NextFunction) => {
  const err = new CustomError(`${req.url} لم استطيع الوصول الى`, 404);
  next(err);
});

//Error Handle
app.use(errorHandler);

//Running The Server
const port: number = +(process.env.PORT || 5000);
app.listen(port, (): void => {
  console.log(`Server is Running on ${port}`);
});

export default app;
