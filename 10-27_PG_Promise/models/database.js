
// database connections

const pgp = require("pg-promise")()

let connectionString = {
    host: "localhost",
    port: 5432,
    database: "yelp",
    user: "postgres"
}

let db = pgp(connectionString)

module.exports = db