const express = require('express')
const cors = require('cors')
const app = express()
const PORT= 4000
// const api = require('./API/api')

const RouteApi = require('./Routes/Route')

app.use(cors())
app.use('/' ,RouteApi)
app.listen(PORT, ()=>{
    console.log("Server is running on ", +PORT)
})