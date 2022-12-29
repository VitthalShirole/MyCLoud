var express=require("express");
var app=express();
var path=require("path");
var product=require("./product.json")

//middle ware config
var staticFolder=express.static(path.join(__dirname,"public"));
app.use(staticFolder)


app.get('/',(req,res)=>
{
    res.sendFile("index.html");
    

})

app.get('/products',(req,res)=>
{
   res.send(product);
})

app.listen(3000);
console.log("Port is running on 3000");