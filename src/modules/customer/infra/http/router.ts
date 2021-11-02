
import express from 'express';
import { CreateCustomerController } from '../../controllers';

const userRouter = express.Router();

userRouter.post('/', (req, res) => CreateCustomerController.execute(req, res))

export { userRouter };