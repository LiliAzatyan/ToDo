import express from "express";

export const route = express.Router();

route.get('/', (req, res)=>{
    res.send("Hi there");
})

route.post('/', (req, res)=>{
    res.send(req.body.name);
})

route.put('/', (req, res) => {
    res.send(req.body.name);
})

route.delete('/', (req, res) => {
    res.send(req.body.data["this data"]);
})

route.patch('/', (req, res) => {
    res.send(req.body.resource)
})
