const { STRING, INTEGER } = require("sequelize/lib/data-types");
const { BaseModel } = require("./BaseModel");

const USER_TABLE_NAME = "users";

class UserModel extends BaseModel {
  constructor(database, transaction) {
    super(USER_TABLE_NAME, database, transaction);
  }

  findById(userId) {
    return this.findOne({ user_id: userId });
  }

  setUserInvites(userId, invites) {
    return this.update({ invite: invites }, { user_id: { $eq: userId } });
  }
}

function initUserModel(database) {
  database.define(USER_TABLE_NAME, {
    login: STRING,
    password: STRING,
    phone: STRING
  });
}

module.exports = { initUserModel, UserModel, USER_TABLE_NAME };
