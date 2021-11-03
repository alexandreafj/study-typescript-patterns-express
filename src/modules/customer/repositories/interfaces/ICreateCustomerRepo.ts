import { Repo } from "../../../../core";
import { Customer } from "../../model";

interface ICreateCustomerRepo extends Repo<Customer> {
    findCustomerByEmail(email: string): Promise<Customer>;
}

export {
    ICreateCustomerRepo
}