import express from "express"
import { getMission, getMissionById, updateMission, createMission, deleteMission } from "../controller/ServerControl.js"


const router = express.Router()

// get all data method
router.get('/api/mission', getMission)

// get specific data by id
router.get('/api/mission/:id', getMissionById)

// posting data
router.post('/api/mission', createMission)

// update data
router.patch('/api/mission/:id', updateMission)

// delete data by spesicif id
router.delete('/api/mission/:id', deleteMission)

export default router