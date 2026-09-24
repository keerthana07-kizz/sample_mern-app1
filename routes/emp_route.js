let express=require('express');
let router=express.Router()
let {users} = require('../models/users');

router.post("/register",async(req,res)=>{
    let data=req.body;
    let newuser=new users(data);
    let result= await newuser.save();
    res.send(result);
})
router.post("/login",(req,res)=>{
    res.send("login router called");
})

router.get("/viewtask", (req, res) => {
    res.send("view task route called");
});

router.patch("/update-profile", (req, res) => {
    res.send("update profile route called");
});

module.exports = router;