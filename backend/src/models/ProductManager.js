const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  constructor() {
    super({ table: "product" });
  }

  insert(product) {
    return this.database.query(
      `insert into ${this.table} (brand, model, os, ram, storage, screen_size, network, charger, phone_condition, blocked_operator, price, phone_img, account_id_account) values (?, ? ,? ,? ,? ,? ,? ,?, ?, ?, ?, ?, ?)`,
      [
        product.brand,
        product.model,
        product.os,
        product.ram,
        product.storage,
        product.screen_size,
        product.network,
        product.charger,
        product.phone_condition,
        product.blocked_operator,
        product.price,
        product.phone_img,
        product.account_id_account,
      ]
    );
  }

  //   update(product) {
  //     return this.database.query(
  //       `update ${this.table} set brand = ? where id = ?`,
  //       [product.title, product.id]
  //     );
  //   }
}

module.exports = ProductManager;
