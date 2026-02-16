




//get users
app.get("/users", (req,res) => {
    res.send(users);
});

//get /users/:id

app.get("/users/:id", (req, res)=>{

});


//update
//put

app.put("/users/:id", (req, res) => {
    const user = users.find(u)
})
