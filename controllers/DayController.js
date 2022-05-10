const { Day } = require('../models')

const GetAllDays = async (req, res) => {
    try {
        const days = await Day.findAll()
        res.send(days)
    } catch (error) {
        throw error
    }
}
const GetDaysByPk = async (req, res) => {
    try {
        const days = await Day.findByPk(req.params.id)
        res.send(days)
    } catch (error) {
        throw error
    }
}
const CreateDay = async (req, res) => {
    try {
        let dayId = parseInt(req.params.id)
        let dayBody = {
            dayId,
            ...req.body
        }
        let day = await Day.create(dayBody)
    } catch (error) {
        throw error
    }
}

const UpdateDay = async (req, res) => {
    try {
        let dayId = parseInt(req.params.id)
        let updateDay = await Day.update(req.body, {
            where: {id: dayId},
            returning: true
        })
        res.send(updateDay)
    } catch (error) {
        throw error
    }
}
const DestroyDay = async (req, res) => {
    try {
        let dayId = parseInt(req.params.id)
        await Day.destroy({
            where: {id: dayId}
        })
        res.send({ message: `Deleted day with an id of ${dayId}`})
    } catch (error) {
        throw error
    }
}

const GetDayByUser = async (req, res) => {
    try {
        let userId = req.params.user_id
        const usersDay = await Day.findAll({
            where: {user_id: userId}
        })
        res.send(usersDay)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetAllDays,
    GetDaysByPk,
    CreateDay,
    UpdateDay,
    DestroyDay,
    GetDayByUser
}