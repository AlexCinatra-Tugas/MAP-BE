import express from "express"


router = express.Router()

// get all data method
router.get('/api/mission', () => { })

// get specific data by id
router.get('/api/mission:id', () => { })

// posting data
router.post('/api/mission', () => { })

// update data
router.patch('/api/mission/:id', () => { })

// delete data by spesicif id
router.delete('/api/mission', () => { })

export default router