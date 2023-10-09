const my_sql = require("mysql")
const conn = my_sql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "123456789"
})

conn.connect((err) => {
    if (err) throw err;
    console.log("Connected to db");
})

module.exports={conn}