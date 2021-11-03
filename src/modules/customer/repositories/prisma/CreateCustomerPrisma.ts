import { PrismaClient } from '@prisma/client'
import { Customer } from '../../model';
import { PRISMA_QUERY_MAX_WAIT, PRISMA_QUEYR_TIMETOUT } from '../../../../infra/prisma/config'

class CreateCustomerPrisma implements BasePrisma<Customer> {

    public async create(data: Customer): Promise<Customer | null> {
        try {

            const prisma = new PrismaClient();

            const [result] = await prisma.$transaction([prisma.customer.create({ data })])

            const customerCreated: Customer = result as Customer;

            return customerCreated;

        } catch (error) {
            console.error(error)
            return null;
        }
    }

}

export {
    CreateCustomerPrisma
}