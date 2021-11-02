class Customer {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
    birthday: string;

    constructor(id:string, name: string, age: number, email: string, password: string, birthday: string) {
        this.id = id
        this.name = name
        this.age = age
        this.email = email
        this.password = password
        this.birthday = birthday
    }
}

export {
    Customer
}