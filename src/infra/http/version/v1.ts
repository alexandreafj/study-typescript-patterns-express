import * as express from 'express'
import { CreateCustomerController } from '../../../modules'
const v1CustomerRouter = express.Router();

v1CustomerRouter.post('/', CreateCustomerController);

export {
    v1CustomerRouter
}