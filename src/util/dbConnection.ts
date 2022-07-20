const mongoose = require('mongoose')
require('dotenv/config')

async function dbConnection() {
    try {
        await mongoose.connect(
            'mongodb+srv://ethio-dev:ethio-dev@devs.wnv7k.mongodb.net/ethio-dev?retryWrites=true&w=majority'
        )
        console.log('mongodb connected')
    } catch (error) {
        console.log(error)
    }
}

export default  dbConnection
