"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db/db"));
const authentication_route_1 = __importDefault(require("./routes/authentication.route"));
const patient_route_1 = __importDefault(require("./routes/patient.route"));
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
app.use("/api/patient", patient_route_1.default);
//Root Route
app.get("/", (_, res) => {
    res.json({ message: "Health Record Hub" });
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
//1- How Patient Get His Password
//2- Page for Test Results
//3- System manager manage patient's accout ?
//# sourceMappingURL=index.js.map