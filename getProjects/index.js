const createMongoClient = require('../shared/mongo')

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const { db, connection } = await createMongoClient()

    const projects = await db.collection("projects").find().toArray()

    connection.close()

    context.res = {
        status: 200, 
        body: projects
    };
}