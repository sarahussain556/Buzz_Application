const User = require("../model/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  //const newUser= await new User({
  // username:"wara",
  // email:"wara768hussain@gmail.com",
  // password:"wara123"})

  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    });

    //save user and respond
    const user = await newUser.save();
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }

 // console.log("helow");
  //res.send("hey its auth route");
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json("user not found");
     }

    const validPassword = await bcrypt.compare(req.body.password, user.password)

    if(!validPassword){
    return res.status(400).json("wrong password");
    }

     return   res.status(200).json(user);
  } catch (err) {
   return  res.status(500).json(err)
  }
});
module.exports = router;