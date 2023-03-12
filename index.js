const express = require('express')
const cors = require('cors')
const app = express()
const PORT= 4000
const apidata = require('./API/api')
// app.use('../api/API')
app.use(cors())
app.listen(PORT, ()=>{
    console.log("Server is running on ", +PORT)
})