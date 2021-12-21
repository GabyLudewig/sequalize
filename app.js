const express = require("express");
const sequelize = require("./db/conexion");
let app = express();
require("dotenv").config();
const booksView= require('./view/book')



app.use(express.json())

async function serverStart (){

    try{

    await sequelize.authenticate();
    console.log('Correct SQL conecction');
    app.listen(3001,()=>{
        console.log(`System Start in: http://${process.env.HOST}:${process.env.PORT}`)
    })
}catch(error){
    console.error('SQL error conection')
}
}
serverStart()
booksView(app)