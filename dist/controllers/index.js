"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCashier = exports.updateCashier = exports.createCashier = exports.getCashierById = exports.getAllCashiers = void 0;
const database_1 = require("../database");
const getAllCashiers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('SELECT * FROM cashier');
        res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('internal server error');
    }
});
exports.getAllCashiers = getAllCashiers;
const getCashierById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const repsponse = yield database_1.pool.query('SELECT * FROM cashier WHERE ID = $1', [id]);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('internal server error');
    }
});
exports.getCashierById = getCashierById;
const createCashier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('internal server error');
    }
});
exports.createCashier = createCashier;
const updateCashier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('internal server error');
    }
});
exports.updateCashier = updateCashier;
const removeCashier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('internal server error');
    }
});
exports.removeCashier = removeCashier;
