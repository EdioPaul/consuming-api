const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors())

app.get('/', async(req, res) => {

   try {
        //response é a resposta do axios, mas com ele é possivel retirar o data de dentro com {data}
       //exemplo fecth do index que é a mesma coisa
       const {data} = await axios('https://jsonplaceholder.typicode.com/users')
       console.log(data)

       return res.json(data)
   } catch (error) {
       console.error(error)
   }
})

app.listen('4567')