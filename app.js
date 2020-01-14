const express = require("express");
const app = express();
const router = express.Router();

const path = __dirname + '/views/';
const PORT = 3000;

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

app.use(express.static(path));
app.use("/", router);

app.listen(PORT, function () {
  console.log('Example app listening on port 3000!')
})

