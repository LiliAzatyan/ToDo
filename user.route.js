import express from "express";

export const route = express.Router();

route.get('/', (req, res)=>{
    res.send("Hi user")
})

route.post('/', (req, res)=>{
    res.send(req.body.name)
})
