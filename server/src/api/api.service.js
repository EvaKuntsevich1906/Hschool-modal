const {createUserDB} = require("./api.repository")

const createUser = async (name, email, password) => {
    const createdUserDB =  await createUserDB(name, email, password)
    return createdUserDB
}

module.exports = {
    createUser
}