import express from "express";

export const route = express.Router();

route.get('/', (req, res)=>{
    try {
        res.send("Hi there");
    } catch (error) {
        console.log(new Error("error code"))
    }
})

route.post('/', (req, res)=>{
    try {
        res.send(req.body.name);
    } catch (error) {
        console.log(new Error("error code"));
    }
})

route.put('/', (req, res) => {
    try {
        res.send(req.body.name);
    } catch (error) {
        console.log(new Error("error code"));
    }
})

route.delete('/', (req, res) => {
    try {
        res.send(req.body.data["this data"]);
    } catch (error) {
        console.log(new Error("error code"));
    }
})

route.patch('/', (req, res) => {
    try {
        res.send(req.body.resource)
    } catch (error) {
        console.log(new Error("error code"));
    }
})

route.options('/', (req, res) => {
    try {
        res.send("Main title material");
    } catch (error) {
        console.log(new Error("error code"));
    }
})

route.head('/', (req, res) => {
    try {
        res.send("Head resource")
    } catch (error) {
        console.log(new Error("error code"));
    }
})
