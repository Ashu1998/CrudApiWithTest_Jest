import mysql from "promise-mysql";

export default class DB {
  protected static _pool:any;
  public static getPool() {
    if (!DB._pool) {
      DB._pool = mysql.createPool({
      host:  "localhost",
      port:   3306,
      user: "Ashu1998",
      password:  "password",
      database:  "EmployeeInfo",
      connectionLimit: 100
      });
    }

    return DB._pool;
  }

  public static async executeQuery(query:string) {
    const pool = await DB.getPool();
    const result = await pool.query(query);
    return result;
  }
}