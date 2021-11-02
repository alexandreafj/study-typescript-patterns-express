interface Repo<T> {
    exists(t : T): Promise<boolean>;
    save(t : T): Promise<any>;
    delete(t: T): Promise<any>;
}

export {
    Repo
}