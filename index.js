"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sumChars_1 = require("./sumChars");
const dotenv_1 = __importDefault(require("dotenv"));
const express = require("express");
const server = express();
server.use(express.json());
dotenv_1.default.config();
function carValue(req, res) {
    let carModel;
    let year;
    let carValue;
    ({ carModel, year } = req.body);
    carValue = (0, sumChars_1.sumChars)(carModel, year);
    res.json(carValue);
    console.log(res.json(carValue));
}
server.post("/car-value", carValue);
const PORT = process.env.PORT || 4001;
server.listen(PORT, () => {
    console.log("listening to port", PORT);
});
