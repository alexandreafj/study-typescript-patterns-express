interface Repo<T> {
    exists(t : T): Promise<boolean>;
    save(t : T): Promise<T | null>;
    delete(t: T): Promise<T | null>;
}

export {
    Repo
}