const Sequelize = require("sequelize");

const { SELECT, UPDATE } = require("sequelize/lib/query-types");
const { ISOLATION_LEVELS } = require("sequelize/lib/transaction");

const { initUserModel } = require("./models/UserModel");

const {
    DATABASE_USER,
    DATABASE_NAME,
    DATABASE_PASS,
    DATABASE_SETTINGS
} = require("../configs/dbConfig");

class Database {
    constructor() {
        this.sequelize = new Sequelize(
            DATABASE_NAME,
            DATABASE_USER,
            DATABASE_PASS,
            DATABASE_SETTINGS
        );

        initUserModel(this);
    }

    model(name) {
        return this.sequelize.model(name);
    }

    define(name, schema) {
        return this.sequelize.define(name, schema);
    }

    sync(options) {
        return this.sequelize.sync(options);
    }

    nativeSelectQuery(sql) {
        return this.sequelize
            .query(sql, {
                type: this.sequelize.QueryTypes.SELECT
            })
            .then(response => {
                return response;
            });
    }

    nativeQuery(sql, options) {
        return this.sequelize.query(sql, options);
    }

    nativeSelect(sql, options) {
        return this.sequelize.query.assign({}, options, { type: SELECT });
    }

    nativeUpdate(sql, options) {
        return this.sequelize.query.assign({}, options, { type: UPDATE });
    }

    createTransaction(autoCollback) {
        return this.sequelize.transaction(
            {
                autocommit: false,
                isolationLevel: ISOLATION_LEVELS.READ_COMMITTED
            },
            autoCollback
        );
    }
}

module.exports = { Database };
