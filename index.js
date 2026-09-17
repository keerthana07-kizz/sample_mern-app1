let express=require('express');
let app=express();
app.post("/addstudent",(req,res)=>{
    res.send("add student called");
});
app.get("/getstudents",(req,res)=>{
    res.send("get students called");
})
app.put("/updatestudent",(req,res)=>{
    res.send("update student called");
})
app.listen(3000,()=>{
  
    console.log("server listening on port 3000");
})