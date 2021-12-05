const express = require("express");
const path = require("path");
let score=0;
const app=express();
  //middleware
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "views"));
  app.use(express.static(__dirname + "/public"));

  app.use(express.urlencoded({ extended: true }));
  app.get("/",(req,res)=>{
      res.render("trivia");
  });

  app.get("/totalmarks",(req,res)=>{
      res.render("marks");
  })
  app.get("/obtainedmarks",(req,res)=>{
     res.send(`Your total marks is:${score}`)
})

  app.post("/post_test",(req,res)=>{
    const data=req.body;
    console.log(data);
    const givenAnswer=[data.one,data.two,data.three,data.four,data.five];
    const actualAnswer=["2007","2009","1758","1971","1929"];
     for(let i=0;i<5;i++){
        if(givenAnswer[i]===actualAnswer[i]){
            score=score+1;
        }
     }
    res.redirect("/totalmarks");
   ;
  })
  const PORT = process.env.PORT || 3000;
  //listening
  app.listen(PORT, () => {
    console.log("APP IS LISTENING ON PORT");
  });