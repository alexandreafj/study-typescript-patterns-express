import { Knex } from 'knex'
import { Knexjs } from '../../../infra/knexjs'
import { Customer } from '../model'
import { ICreateCustomerRepo } from './interfaces';

class CreateCustomerRepo implements ICreateCustomerRepo {
    
    exists(t: Customer): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    delete(t: Customer): Promise<any> {
        throw new Error('Method not implemented.');
    }

    public async findCustomerByEmail(email: string): Promise<Customer> {

        const transaction: Knex.Transaction = await Knexjs.openTransaction()

        const customer: Customer = await transaction()
            .select(
                "id",
                )
            .from("customer")
            .whereRaw("email = ?", [email]) as Customer;

        transaction.commit()

        return customer
    }

    public async save(customer: Customer): Promise<void> {

        const transaction: Knex.Transaction = await Knexjs.openTransaction()

        try {

            await transaction("customer")
                .insert(customer)

            transaction.commit()

        } catch (error) {
            console.error(error)
            transaction.rollback()
        }
    }

}

export {
    CreateCustomerRepo
}