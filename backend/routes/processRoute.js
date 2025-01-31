import express from 'express';
import { processPayment } from '../controllers/processController.js';
const router=express.Router();
router.route("/payment/process").post(processPayment)
export default router;
