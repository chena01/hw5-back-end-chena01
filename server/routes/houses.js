import express from "express";
import { getHouses, createUserHouses, getHouse, DeleteHouse, updatehouse } from "../controller/House.js";
const router = express.Router();
router.get('/houses', getHouses);
router.post('/register', createUserHouses);
router.get('/singlehouse/:id', getHouse);
router.delete('/house/:id', DeleteHouse)
router.put('/update/:id', updatehouse)
export default router;