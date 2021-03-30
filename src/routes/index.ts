import { Router } from "express"
import { getAllCashiers, getCashierById, createCashier, updateCashier, removeCashier } from '../controllers/index'
const router = Router()


router.get('/cashier', getAllCashiers)
router.get('/cashier/:id', getCashierById)
router.post('/cashier', createCashier)
router.put('/cashier/:id', updateCashier)
router.delete('/cashier/:id', removeCashier)

export default router