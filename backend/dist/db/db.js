"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const mongoose_1 = __importDefault(require("mongoose"));
(0, dotenv_1.config)();
const dbConnection = () => {
    mongoose_1.default
        .connect(`${process.env.DB}`)
        .then((conn) => {
        console.log(`Database Connected: ${conn.connection.host}`);
    })
        .catch((err) => {
        console.error(`Database Error: ${err}`);
        process.exit(1);
    });
};
exports.default = dbConnection;
//# sourceMappingURL=db.js.map