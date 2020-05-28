const express = require('express');
const insert = express.Router()
const dbConnection = require('../../../db')

const month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
insert.post('/', async (req, res) => {
    const {
        fullname,
        sub_district,
        District,
        Province,
        Country,
        zipcode,
        DOB
    } = req.body

    const sql1 = `Select Customer_Id FROM Customer ORDER BY Customer_Id DESC LIMIT 1`
    let [
        [id]
    ] = await dbConnection.execute(sql1)
    let customer_id;
    if (id.length === 0) {
        customer_id = 1
        console.log("a")
    } else {
        console.log(id.Customer_Id)
        customer_id = Number(id.Customer_Id) + 1
        console.log("b")

    }
    const date = new Date();
    const dateinsert = `${date.getFullYear()}-${month[date.getMonth()]}-${date.getDate()}`
    const sql = `INSERT INTO Customer (Customer_id,fullname,sub_district,District,Province,Country,zipcode,DOB,CreateAt,UpdateAt) VALUES (?,?,?,?,?,?,?,?,?,?)`
    try {
        const [data] = await dbConnection.execute(sql, [customer_id, fullname, sub_district, District, Province, Country, zipcode, DOB, dateinsert, dateinsert])
        if (data.length === 0) {
            res.status(404).send({
                msg: "Insert Fail",
                error: true
            })
        }
        res.status(200).send({
            msg: "Insert Successful",
            error: false
        })
    } catch (error) {
        console.log(error.message)
    }
})
module.exports = insert