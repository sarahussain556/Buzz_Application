const express=require("express");
const app=express();

const mongoose=require("mongoose");
const dotenv=require("dotenv");
const helmet=require("helmet");
const morgan=require("morgan");
const userRoute=require("./routes/users");
const authRoute=require("./routes/auth");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
  console.log("Connected to mongo")
}).catch((err)=>{
  console.log(err);
})
//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use("/api/users",userRoute);
//userRoute.initialize(app);

app.use("/api/auth",authRoute);
//authRoute.initialize(app);

// app.get("/",(req,res)=>{
//   res.send("Welcome");
// })


app.listen(3001,()=>{
  console.log("backend server is running")
})
