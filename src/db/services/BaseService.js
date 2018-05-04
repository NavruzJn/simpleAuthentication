class BaseService {
  constructor(database, transaction) {
    this.database = database;
    this.transaction = transaction;
  }
}

module.exports = { BaseService };
