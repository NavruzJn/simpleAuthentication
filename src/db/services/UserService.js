const { BaseService } = require("./BaseService");
const { UserModel } = require("../models/UserModel");

class UserService extends BaseService {
    constructor(database, transaction) {
        super(database, transaction);

        this.user = new UserModel(database, transaction);
    }

    getUser(login, password) {
        return this.user.findOne({login, password});
    }

}

module.exports = { UserService };
