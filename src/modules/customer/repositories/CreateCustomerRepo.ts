import { CreateCustomerPrisma } from './prisma/CreateCustomerPrisma'
import { Customer } from '../model'
import { ICreateCustomerRepo } from './interfaces';

class CreateCustomerRepo implements ICreateCustomerRepo {

    public async save(customer: Customer): Promise<Customer | null> {

        const db = new CreateCustomerPrisma()

        const result = await db.create(customer)

        return result
        
    }

}

export {
    CreateCustomerRepo
}