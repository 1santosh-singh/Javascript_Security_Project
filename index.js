const express = require("express")
const app = express()


app.get('/', function (req, res) {
    console.log("Welcome to Rest API")
    res.send("Welcome to Rest API")
});

app.get('/time', function (req, res) {
    var time = new Date().toLocaleTimeString();
    res.send(`Time is: ${time}`);
});

app.get('/date', function (req, res) {
    var date = new Date().toLocaleDateString();
-    res.send(`Date is: ${date}`);
})


app.listen(3000, () => console.log("Server is running now"))