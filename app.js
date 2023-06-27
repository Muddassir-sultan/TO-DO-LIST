// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app =express();

let items =[];
let workitems =[];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",function(req,res){

    let today = new Date();
    //   var currentDay = today.getDay();
    //   var day="";
 
    let options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    };

    let day = today.toLocaleDateString("en-US",options);

    res.render("List",{listtitle: day, newlistitem:items});

});



app.post("/",function(req,res){

    
    let item = req.body.newItem;

    items.push(item);
    res.redirect("/");
});
// switch (currentDay){
//     case 0:
//         day ="Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tueday";
//         break;
//     case 3:
//         day = "Wedday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
//         break;

// }
    app.get("/work",function(req,res){
        res.render("list",{listtitle:"Work List",newlistitem: workitems})
    });
app.get("/about",function(req,res){
    res.render("about");
})


    app.post("/work",function(req,res){
        let item = req.body.newItem;
        workitems.push(item);
        res.redirect("/work");
    })


app.listen(process.env.PORT ||3000,function(){
    console.log("server is on");
});
