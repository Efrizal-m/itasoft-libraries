import express from 'express';
import TransactionController from '../controllers/transaction';

const router = express.Router();
const transactionController = new TransactionController();

router.get('/', transactionController.getAll);
router.get('/:id', transactionController.getById);
router.post('/', transactionController.create);
router.put('/:id', transactionController.update);
router.delete('/:id', transactionController.delete);

export default router;
