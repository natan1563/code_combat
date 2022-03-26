const userTable = require('./Table/User')
const advertisementTable = require('./Table/Advertisement')

userTable
    .sync()
    .then(() => console.log('User table created successfull'))
    .catch(e => console.error(e.message))

advertisementTable
    .sync()
    .then(() => console.log('Adversiment table created successfull'))
    .catch(e => console.error(e.message))