import { BaseController } from '../../../core'
import { CreateCustomerDTO, CustomerDTO } from '../dtos'
import { Customer } from '../model';
import { CreateCustomerService } from '../services'

class CreateCustomerController extends BaseController {

    public constructor() {
        super();
    }
    
    public async executeImpl(): Promise<any> {
        try {

            const dto: CreateCustomerDTO = this.req.body as CreateCustomerDTO

            const service: CreateCustomerService = new CreateCustomerService()

            const result: Customer = await service.createCustomer(dto)

            const dtoResponse: CustomerDTO = {
                id: result.id,
                name: result.name,
                age: result.age,
                birthday:result.birthday,
                email: result.email,
                password: result.password
            }

            return this.ok<CustomerDTO>(dtoResponse)
            
        } catch (error) {
            return this.badRequest(String(error))
        }
    }

}

export {
    CreateCustomerController
}