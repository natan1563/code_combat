const express = require('express')
const app = express()

const userRouter = require('./Routes/UserRoute')
const advertisementRouter = require('./Routes/AdvertisementRoute')

app.use('/user', userRouter)

app.use('/advertisement', advertisementRouter)

app.listen(3000, () => {
    console.log('Rodando na porta 3000')
})