// import schema from "./schema";
const express = require('express');
const login = express.Router()
const dbConnection = require('../../../db')

login.post('/', async (req, res) => {
    // res.send({
    //     msg: "Hello Tar"
    // })
    const {
        username,
        password
    } = req.body

    const sql = `SELECT Fullname,username FROM USER WHERE username = ? AND password = ?`
    try {
        const [data] = await dbConnection.execute(sql, [username, password])
        // console.log(data.length)
        if (data.length === 0) {
            res.status(404).send({
                msg: "Login Fail"
            })
        }
        res.send({
            msg: "Login Successful"
        })
    } catch (error) {
        console.log(error.message)
    }
})
module.exports = login