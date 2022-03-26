const express = require('express')
const app = express()

const userRouter = require('./Routes/UserRoute')

app.use('/user', userRouter)

app.listen(3000, () => {
    console.log('Rodando na porta 3000')
})