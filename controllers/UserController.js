const { user } = require('pg/lib/defaults')
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
        res.send(user)
    } catch (error) {
        throw error
    }
}

const CreateUser = async (req, res) => {
    try {
        const userId = parseInt(req.params.id)
        let userBody = {
            userId,
            ...req.body
        }
        let user = await User.create(userBody)
        res.send(user)
    } catch (error) {
        throw error
    } 
}
const UpdateUser = async (req, res) => {
    try {
        let userId = parseInt(req.params.id)
        let updateUser = await User.update(req.body, {
            where: {id: userId},
            returning: true
        })
        res.send(updateUser)
    } catch (error) {
        throw error
    }
}

const DestroyUser = async (req, res) => {
    try {
        let userId = parseInt(req.params.id)
        await User.destroy({
            where: {id: userId}
        })
        res.send({ message: `Deleted user with an id of ${userId}`})
    } catch (error) {
        throw error
    }
}



module.exports = {
    GetUsers,
    GetUserByPk,
    CreateUser,
    UpdateUser,
    DestroyUser
}