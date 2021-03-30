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
exports.updateCashier = exports.removeCashier = exports.createCashier = exports.getCashierById = exports.getAllCashiers = void 0;
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
        return res.status(200).json(repsponse.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('internal server error');
    }
});
exports.getCashierById = getCashierById;
const createCashier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, age, sex, surname, expirience, previous_work } = req.body;
        const response = yield database_1.pool.query('INSERT INTO cashier (name, age, sex , surname, expirience, previous_work) VALUES ($1, $2, $3, $4, $5, $6)', [name, age, sex, surname, expirience, previous_work]);
        return res.status(200).json({
            message: 'user created succesfully',
            body: {
                cashier: {
                    name, age, sex, surname, expirience, previous_work
                }
            }
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('internal server error');
    }
});
exports.createCashier = createCashier;
const removeCashier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield database_1.pool.query('DELETE FROM cashier WHERE ID = $1', [id]);
        return res.status(200).json(`cashier ${id} was deleted sussesfully`);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('internal server error');
    }
});
exports.removeCashier = removeCashier;
const updateCashier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { name, age, sex, surname, expirience, previous_work } = req.body;
        yield database_1.pool.query('UPDATE cashier SET name  = $1, age  = $2,  sex  = $3, surname  = $4,  expirience  = $5,previous_work  = $6  WHERE id = $7', [name, age, sex, surname, expirience, previous_work, id]);
        return res.status(200).json({
            message: (`cashier ${id} was updated sussesfully`),
            body: {
                cashier: {
                    name, age, sex, surname, expirience, previous_work
                }
            }
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('internal server error');
    }
});
exports.updateCashier = updateCashier;
