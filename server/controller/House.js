import { v4 as uuid } from "uuid";
let userHouses = [];
export const getHouses = (req, res)=>{
    res.send(userHouses)
}
export const createUserHouses=(req,res)=>{
    const userHouse = req.body;
    userHouses.push({...userHouse, id: uuid()});
    res.send('house added succefully');
}
export const getHouse=(req,res)=>{
    const getsingleHouse= userHouses.filter((getHouse)=>getHouse.id===req.params.id);
    res.send(getsingleHouse);
}
export const DeleteHouse=(req,res)=>{
    userHouses=userHouses.filter((userHouse)=>userHouse.id!==req.params.id);
    res.send("house removed succefully");
}
export const updatehouse=(req, res)=>{
    const userHouse = userHouses.find((userHouse)=>userHouse.id===req.params.id);
    userHouse.name = req.body.name;
    userHouse.email=req.body.email;
    userHouse.phone =req.body.phone;
    res.send("house updated successfully")
}
