const { Week } = require('../models')

const GetAllWeeks = async (req, res) => {
    try {
        const weeks = await Week.findAll()
        res.send(weeks)
    } catch (error) {
        throw error
    }
}
const GetWeeksByPk = async (req, res) => {
    try {
        const weeks = await Week.findByPk(req.params.id)
        res.send(days)
    } catch (error) {
        throw error
    }
}
const CreateWeek = async (req, res) => {
    try {
        let weekId = parseInt(req.params.id)
        let weekBody = {
            weekId,
            ...req.body
        }
        let weeks = await Week.create(weekBody)
        res.send(weeks)
    } catch (error) {
        throw error
    }
}
const UpdateWeek = async (req,res) => {
    try {
        let weekId = parseInt(req.params.id)
        let updateWeek = await Week.update(req.body, {
            where: {id: weekId},
            returning: true
        })
        res.send(updateWeek)
    } catch (error) {
        throw error
    }
}
const DestroyWeek = async (req, res) => {
    try {
        let weekId = parseInt(req.params.id)
        await Week.destroy({
            where: {id: weekId}
        })
        res.send({ message: `Deleted week with an id of ${weekId}`})
    } catch (error) {
        throw error
    }
}

const GetWeekByUser = async (req, res) => {
    try {
        let userId = req.params.user_id
        const usersWeek = await Week.findAll({
            where: {user_id: userId}
        })
        res.send(usersWeek)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetAllWeeks,
    GetWeeksByPk,
    CreateWeek,
    UpdateWeek,
    DestroyWeek,
    GetWeekByUser
}