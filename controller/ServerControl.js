import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getMission = async (req, res) => {
    try {
        const response = await prisma.misidata.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const getMissionById = async (req, res) => {
    try {
        const response = await prisma.misidata.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ msg: error.message });
    }
}

export const createMission = async (req, res) => {
    const { missionName, status, nodes } = req.body;
    console.log(req.body)
    try {
        const row = await prisma.misidata.create({
            data: {
                missionName: missionName,
                status: status,
                nodes: nodes
            }
        });
        res.status(201).json(row);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const updateMission = async (req, res) => {
    const { missionName, status, nodes } = req.body;
    try {
        const misidata = await prisma.misidata.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                missionName: missionName,
                status: status,
                nodes: nodes
            }
        });
        res.status(200).json(misidata);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const deleteMission = async (req, res) => {
    try {
        const misidata = await prisma.misidata.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(200).json(misidata);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}