"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db/db"));
const appointment_route_1 = __importDefault(require("./routes/appointment.route"));
const authentication_route_1 = __importDefault(require("./routes/authentication.route"));
const medicalRecord_route_1 = __importDefault(require("./routes/medicalRecord.route"));
const medication_route_1 = __importDefault(require("./routes/medication.route"));
const patient_route_1 = __importDefault(require("./routes/patient.route"));
const prescription_route_1 = __importDefault(require("./routes/prescription.route"));
const procedure_route_1 = __importDefault(require("./routes/procedure.route"));
const testResult_route_1 = __importDefault(require("./routes/testResult.route"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const customError_util_1 = __importDefault(require("./utils/customError.util"));
const errorHandler_util_1 = __importDefault(require("./utils/errorHandler.util"));
//Connect Dataase
(0, db_1.default)();
//Dotenv
(0, dotenv_1.config)();
//Create Express App
const app = (0, express_1.default)();
app.use(express_1.default.json());
//Routes
app.use("/api/auth", authentication_route_1.default);
app.use("/api/user", user_route_1.default);
app.use("/api/patient", patient_route_1.default);
app.use("/api/appointment", appointment_route_1.default);
app.use("/api/medicalRecord", medicalRecord_route_1.default);
app.use("/api/procedure", procedure_route_1.default);
app.use("/api/prescription", prescription_route_1.default);
app.use("/api/testResult", testResult_route_1.default);
app.use("/api/medication", medication_route_1.default);
//Root Route
app.get("/", (_, res) => {
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
app.all("*", (req, _, next) => {
    const err = new customError_util_1.default(`${req.url} لم استطيع الوصول الى`, 404);
    next(err);
});
//Error Handle
app.use(errorHandler_util_1.default);
//Running The Server
const port = +(process.env.PORT || 8000);
app.listen(port, () => {
    console.log(`Server is Running on ${port}`);
});
//Notes
// 1- what is difference between dosage of medication and dosage of prescription
// 2-
//# sourceMappingURL=index.js.map