const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const chefs = require ('./data/chef.json')

app.get("/", (req, res) => {
  res.send("Chef is running");
});

app.get('/chefs',(req,res)=>{
res.send(chefs)
})

app.listen(port, () => {
  console.log(`Dragon API is running on port: ${port}`);
});
