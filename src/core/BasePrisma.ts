interface BasePrisma<T> {
    create(t: T): Promise<T | null>;
    createMany(t: T[]): Promise<T | null> ;
    delete(t: T): Promise<boolean>;
    update(t: T): Promise<boolean>;
    findUnique(options?: T): Promise<T | null>;
    findMany(options?: T): Promise<T[] | null> ;
}