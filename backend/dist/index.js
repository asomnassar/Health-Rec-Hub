"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db/db"));
const customError_util_1 = __importDefault(require("./utils/customError.util"));
const errorHandler_util_1 = __importDefault(require("./utils/errorHandler.util"));
(0, db_1.default)();
(0, dotenv_1.config)();
const port = +(process.env.PORT || 8000);
const app = (0, express_1.default)();
app.get("/", (_, res) => {
    res.json({ message: "Health Record Hub" });
});
app.all("*", (req, _, next) => {
    const err = new customError_util_1.default(`Can't find ${req.url} on the server!`, 404);
    next(err);
});
app.use(errorHandler_util_1.default);
app.listen(port, () => {
    console.log(`Server is Running on ${port}`);
});
//# sourceMappingURL=index.js.map