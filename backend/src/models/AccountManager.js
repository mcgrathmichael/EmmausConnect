const AbstractManager = require("./AbstractManager");

class AccountManager extends AbstractManager {
  constructor() {
    super({ table: "account" });
  }

  insert(account) {
    return this.database.query(
      `insert into ${this.table} (email, pwd) values (?, ?)`,
      [account.email, account.pwd]
    );
  }

  update(account) {
    return this.database.query(
      `update ${this.table} set email = ? where pwd = ?`,
      [account.email, account.pwd]
    );
  }
}

module.exports = AccountManager;
