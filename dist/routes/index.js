"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controllers/index");
const router = express_1.Router();
router.get('/cashier', index_1.getAllCashiers);
router.get('/cashier/:id', index_1.getCashierById);
router.post('/cashier', index_1.createCashier);
router.put('/cashier/:id', index_1.updateCashier);
router.delete('/cashier/:id', index_1.removeCashier);
exports.default = router;
