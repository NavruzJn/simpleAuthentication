const DATABASE_NAME = process.env.GL_DB_NAME || "auth";
const DATABASE_USER = process.env.USER || "root";
const DATABASE_PASS = process.env.GL_DB_PASS || "";
const DATABASE_HOST = process.env.GL_DB_HOST || "127.0.0.1";
const DATABASE_PORT = process.env.GL_DB_PORT || "";

const DATABASE_SETTINGS = {
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    dialect: "mysql",
    define: {
        timestamps: false,
        freezeTableName: true // true by default
    },

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
};

module.exports = {
    DATABASE_NAME,
    DATABASE_USER,
    DATABASE_PASS,
    DATABASE_PORT,
    DATABASE_HOST,
    DATABASE_SETTINGS
};
