const AbstractManager = require("./AbstractManager");

class AccountManager extends AbstractManager {
  constructor() {
    super({ table: "account" });
  }

  insert(account) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      account.title,
    ]);
  }

  update(account) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [account.title, account.id]
    );
  }
}

module.exports = AccountManager;
