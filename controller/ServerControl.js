import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getMission = async (req, res) => {
    console.log("data has been fetch")
    try {
        const response = await prisma.misidata.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const getMissionById = async (req, res) => {
    console.log("data has been fetch by id")
    try {
        const response = await prisma.misidata.findUnique({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ msg: error.message });
    }
}

export const createMission = async (req, res) => {
    console.log("data has been created")
    const { type, data } = req.body
    try {
        const row = await prisma.misidata.create({
            data: {
                type: type,
                data: data
            }
        });
        res.status(201).json(row);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const updateMission = async (req, res) => {
    console.log("data has been updated")
    const { type, data } = req.body
    try {
        const misidata = await prisma.misidata.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                type: type,
                data: data
            }
        });
        res.status(200).json(misidata);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const deleteMission = async (req, res) => {
    console.log("data has been deleted")
    const id = req.params.id
    try {
        const misidata = await prisma.misidata.delete({
            where: {
                id: parseInt(id)
            }
        });
        res.status(200).json(misidata);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}