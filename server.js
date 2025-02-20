require("dotenv").config();
const express = require("express");
const app = express();  
const mongoose = require("mongoose");
const port = 8000;
const router = require("./Routes/routes");


// Connect to MongoDB
mongoose
.connect(process.env.MONGO_URI, {
    })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.use(express.json());
app.use("/", router);











    
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });