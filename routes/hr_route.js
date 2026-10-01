let express = require('express');
let router = express.Router();
let{users} =require('../models/users');
let {task} =require('../models/tasks');

router.post("/assign-task",async (req,res)=>{
    let data=req.body;
    let newtask= new task(data);
    let result=await newtask.save();
    res.send(result);
  //  res.send(data)
});
router.get("/viewemp", (req, res) => {
    res.send("view employee route called");
});


router.delete("/deleteemp", (req, res) => {
    res.send("delete employee route called");
});

router.get("/viewtask", (req, res) => {
    res.send("view task route called"); 
});

module.exports = router;