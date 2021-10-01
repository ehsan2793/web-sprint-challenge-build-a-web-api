// Write your "projects" router here!
const Project = require('./projects-model');
const express = require('express');

const router = express.Router()
const { checkId } = require('./projects-middleware');
router.get('/', async (req, res, next) => {
    try {
        const allProjects = await Project.get()
        res.status(200).json(allProjects)

    } catch (err) {
        next(err)
    }
})

router.get('/:id', checkId, (req, res) => {
    res.status(200).json(req.body)
})

router.post('/', (req, res) => {

})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

router.get('/:id/actions', (req, res) => {

})


module.exports = router;











