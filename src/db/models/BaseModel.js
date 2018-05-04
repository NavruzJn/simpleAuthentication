class BaseModel {
  /**
   *
   * @param {String} name
   * @param {Database} database
   * @param transaction
   */
  constructor(name, database, transaction) {
    this.name = name;
    this.transaction = transaction;
    this.model = database.model(name);
  }

  findOne(where) {
    return this.model.findOne({ where, transaction: this.transaction });
  }

  create(values, options) {
    return this.model.create(
      values,
      Object.assign({}, options, { transaction: this.transaction })
    );
  }

  update(values, where) {
    return this.model.update(values, { where, transaction: this.transaction });
  }

  delete(values, where) {
    return this.model.delete(values, { where, transaction: this.transaction });
  }

  destroy(where) {
    return this.model.destroy({ where, transaction: this.transaction });
  }

  findAll(where, attributes) {
    return this.model.findAll({
      where,
      attributes,
      transaction: this.transaction
    });
  }

  findAndCountAll(where, attributes) {
    return this.model.findAndCountAll({
      where,
      attributes,
      transaction: this.transaction
    });
  }
}

module.exports = { BaseModel };
