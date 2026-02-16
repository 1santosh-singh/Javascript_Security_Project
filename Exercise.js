const express = require("express")
const app = express();

app.use(express.json());

let students = [
    {id : 1, name: "Santosh", monbileNO: 1234567899, address:"Pune", age: 20},
    {id :2, name: "Ajay", monbileNO: 9987654321, address:"Pune", age: 20},
    {id: 3, name: "Ayush", monbileNO: 1234567899, address:"Indore", age: 20}
];

app.get("/", (req, res) =>{
    res.send("This is the root")
})


//Read
app.get("/students", (req, res) =>{
    res.send(students)
})


//Create
app.get("/students", (req, res) =>{
    const newStudent = {
        id : students.length + 1,
        name: req.body.name,
        mobileNo: req.body.mobileNo,
        address: req.body.address,
        age: req.body.age
    };

    students.push(newStudent);
    res.send(students)
})

//Get users by id
app.get("/students/:id", (req, res) =>{
    const finded_student = students.find(u=>u.id == req.params.id)
    if(!finded_student) return res.status(404).send("user not found")

    res.send(finded_student)
});


//Update
app.put("/students/:id", (req, res)=>{

    const update_student = students.find(u => u.id == req.params.id);
    if(!update_student) return res.status(404).send("user not found");
    update_student.name=req.body.name;
    update_student.monbileNO=req.body.mobileNo;
    update_student.address=req.body.address;
    update_student.age=req.body.age;

    res.send(update_student)
});


//Delete

app.delete("/students/:id", (req, res) =>{
    students = students.filter( u => u.id != req.params.id)
    res.send("user deleted");
});



app.listen(9000, ()=> console.log("Server is running"))
