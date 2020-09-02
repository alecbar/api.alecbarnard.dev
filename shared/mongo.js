const {MongoClient} = require("mongodb")
require("dotenv").config()

const uri = process.env.MONGO_URI

const createConnection = async () => {
    const connection = await MongoClient.connect(uri)
    const db = connection.db("alecbarnard-dev")

    return {connection, db} 
}

module.exports = createConnection