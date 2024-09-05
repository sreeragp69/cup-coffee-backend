const User = require("../models/user_model");
//* -----------------
//* HOME LOGIC
//* -----------------

const Home = async (req, res,next) => {
  try {
    res.status(200).json("Router part1");
  } catch (error) {
    next(error)
  }
};

//* -----------------
//* REGISTER LOGIC
//* -----------------

const Register = async (req, res,next) => {
  try {
    const { username, email, phone, password } = req.body;

    //* CHECK USER EXIST OR NOT
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "Email Already Exists" });
    }

    //* STORE DATA TO DATABASE
    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(201).json({
      msg: "Registration Successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    next(error)
  }
};



//* -----------------
//* LOGIN LOGIC
//* -----------------

const Login =  async(req,res,next) => {
  try {
    const {email,password}= req.body
    
    

   const userExist = await User.findOne({email})

   if (!userExist) {
    return res.status(400).json({message:"Invalid Credentials"})
   }
    
   
  const user = await userExist.comparePassword(password)

   if (user) {
    res.status(200).json({
      message:"Login Successfull" ,
      token:await userExist.generateToken(),
      userId:userExist._id.toString() 
      ,})
    
   }else{
    res.status(401).json({message:"Invalid Password or Email"})
   }
     
  } catch (error) {
    next(error)
  }
}




//* -----------------
//*  TO send user Data ---- USER LOGIC
//* -----------------


const user =  async(req,res,next) => {
  try {
    
    const userData = req.user
  
   return res.status(200).json({userData})
   


  } catch (error) {
    console.log(`Error from the user route ${error}`);
    
  }
}



module.exports = { Home, Register,Login ,user};
