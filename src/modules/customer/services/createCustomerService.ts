import { CreateCustomerDTO } from '../dtos'
import { Customer } from '../model'
import { CreateCustomerRepo } from '../repositories'
import { uuid } from 'uuidv4'

class CreateCustomerService {

    public async createCustomer(dto: CreateCustomerDTO): Promise<Customer> {

        const id = uuid()

        const {
            name = "",
            age = 0,
            birthday = "",
            email = "",
            password = ""
        } = dto;

        //verify email if exists

        const customer: Customer = new Customer(id, name, age, email, password, birthday)

        const repo: CreateCustomerRepo = new CreateCustomerRepo();

        await repo.save(customer)

        return customer
    }

}
export {
    CreateCustomerService 
}