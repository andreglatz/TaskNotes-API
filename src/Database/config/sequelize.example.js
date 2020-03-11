module.exports = {
    external: '<insira uma url de conexao>',

    local: {
        dialect: 'postgres',
        host: "localhost",
        username: "root",
        password: "123",
        database: "tasknotes",
        logging: false,
        define: {
            timestamps: true,
            underscored: true,

        }
    }
}