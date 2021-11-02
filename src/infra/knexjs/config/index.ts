import { knex, Knex } from 'knex'

const { 
  DB_USER, 
  DB_PASS, 
  DB_HOST,
  DB_NAME,
  DB_PORT,
  DB_MIN_POOL,
  DB_MAX_POOL,
  DB_IDLE_CONNECTION_TIMEOUT
} = process.env;

const databaseCredentials = {
    "client": "mysql",
    "connection": {
      "user": DB_USER,
      "password": DB_PASS,
      "database": DB_NAME,
      "host": DB_HOST,
      "port": Number(DB_PORT),
      "pool": {
        "min": Number(DB_MIN_POOL),
        "max": Number(DB_MAX_POOL),
        "idleTimeoutMillis": 1000 * Number(DB_IDLE_CONNECTION_TIMEOUT),
      }
    }
};

class Knexjs {

  public static async openTransaction(): Promise<Knex.Transaction> {

    const {
        client,
        connection: {
            user,
            password,
            database,
            host,
            port,
            pool
        } = {}
    } = databaseCredentials;

    const transaction = await knex({
      client,
      connection: {
        user,
        password,
        database,
        host,
        port,
        pool
      },
    }).transaction();

    return transaction

  }

  public static commitTransaction(transaction: Knex.Transaction) {
    transaction.commit()
  } 

  public static rollbackTransaction(transaction: Knex.Transaction) {
    transaction.rollback()
  }

}

export {
  Knexjs
}