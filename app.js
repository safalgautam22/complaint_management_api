const express = require("express")
const app = express()
require("dotenv").config()
const connectDatabase = require("./connection")
connectDatabase()
app.use(express.json())

const {create, fetchComplaints, fetchComplaint, update, deleteComplaint} = require("./controller/complaints")

app.post("/create", create)
app.get("/complaints", fetchComplaints)
app.get("/complaint/:id", fetchComplaint)
app.put("/update/:id", update)
app.delete("/delete/:id", deleteComplaint)


app.listen(3000, function(){
    console.log("server started on port no 3000")
})
