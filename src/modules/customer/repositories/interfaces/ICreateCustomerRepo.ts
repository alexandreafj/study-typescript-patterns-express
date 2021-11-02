import { Repo } from "../../../../core";
import { Customer } from "../../model";

interface ICreateCustomerRepo extends Repo<Customer> {
    findCustomerByEmail(email: string): Promise<Customer>;
    save(customer: Customer): Promise<void>
}

export {
    ICreateCustomerRepo
}