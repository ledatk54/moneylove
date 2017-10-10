module.exports = {
    username: "root",
    password: "",
    database: "moneylove",
    host: "127.0.0.1",
    post: "3306",
    dialect: "mysql",
    define: {
        "timestamps": false
    },
    pool: {
        "max": 5,
        "min": 0,
        "idle": 10000
    }
}