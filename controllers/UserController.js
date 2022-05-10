const { User } = require('../models')

const GetUsers = async (req, res) => {
    try {
    const users = await User.findAll()
    res.send(users)
    } catch (error) {
    throw error
    }
}

const GetUserByPk = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        res.send(workout)
    } catch (error) {
        throw error
    }
}







module.exports = {
    GetUsers,
    GetUserByPk
}