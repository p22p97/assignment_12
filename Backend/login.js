// const { json } = require("express")
const db = require("../db.js")

async function signup(req, res) {
    try {
        if (!req.body.username || !req.body.fullname || !req.body.password) throw "Username, password and fullname are mandetory parameters"
        let res_sql = `SELECT fullname FROM assignment.user where username='${req.body.username}'`
        let res_sql_1 = db.conn.query(res_sql)

        if (res_sql_1.length > 0) throw "Username already exist"
        let ins_sql = `INSERT INTO assignment.user (username, password, fullname) VALUES ('${req.body.username}', MD5('${req.body.password}'),'${req.body.fullname}')`
        db.conn.query(ins_sql, (Error, result) => {
            if (Error) { 
                res.status(400).json({ "Success": false, "Error": Error.sqlMessage }) 
            } else{
                res.status(200).json({ "Success": true, "Message": "Data Inserted" }) 
            }
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({ "Success": false, "Error": e })
    }
}

async function login(req, res) {
    try {
        if (!req.query.username || !req.query.password) throw "Username, password are mandetory parameters"
        let res_sql = `SELECT * FROM assignment.user WHERE username='${req.query.username}' AND password=MD5('${req.query.password}')`
        db.conn.query(res_sql, (err,result)=>{
            if (err) { 
                res.status(400).json({ "Success": false, "Error": err.sqlMessage }) 
            } else{
                if(result.length>0){
                    res.status(200).json({ "Success": true, "Data": result}) 
                }else{
                    res.status(400).json({ "Success": false, "Message": "No data found" }) 
                }
            }
        })

    } catch (e) {
        console.log(e)
        res.status(500).json({ "Success": false, "error": e })
    }
}

module.exports = { signup, login }