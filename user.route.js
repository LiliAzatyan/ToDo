import express from "express";

export const route = express.Router();

route.get('/', (req, res)=>{
    try {
        res.send("Hi user")
    } catch (error) {
        console.log(new Error("error code"));
    }
})

route.post('/', (req, res)=>{
    try {
        res.send(req.body.name)
    } catch (error) {
        console.log(new Error("error code"));
    }
})

route.delete('/', (req, res) => {
    try {
        res.send(req.body.data["this resource"]);
    } catch (error) {
        console.log(new Error("error code"));
    }
})
