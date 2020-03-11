module.exports = {
    external: {
        dialect: 'postgres',
        host: "tuffi.db.elephantsql.com",
        username: "bbhotvcb",
        password: "8_8BFxCID_xl-LhW-xs0axxIFT_S4G2c",
        database: "bbhotvcb",
        logging: false,
        define: {
            timestamps: true,
            underscored: true,
        }
    },
    local: {
        dialect: 'postgres',
        host: "localhost",
        username: "dev",
        password: "glatz",
        database: "tasknotes",
        logging: false,
        define: {
            timestamps: true,
            underscored: true,
        }
    }
}