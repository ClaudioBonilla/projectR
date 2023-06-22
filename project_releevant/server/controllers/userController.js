const jwt = require('jsonwebtoken');
const md5 = require('md5')

const userDao = require("../services/dao/userDao");

const userController = {}

userController.addUser = async (req,res) =>{
    const {nombre, email,password} = req.body;

    if(!nombre || !email || !password){
        return res.status(400).send({message: " Email and Password is required"})
    }

    try{
        const user = await userDao.addUser(req.body)
        console.log(user);

        if(user.length > 0){
            return res.status(204).send({message: "User already exits"})
        }
        const addUser = await userDao.addUser(req.body)
        if(addUser){
            return res.status(201).send({message: "User added succesfully"})
        }
    }catch(error){
        res.status(500).send({message: error.message})
    }
}

userController.userLogin = async (req,res) =>{
    const { email,password } = req.body

    if(!email || !password){
        return res.status(400).send({message: "Email and Password is necessary"})
    }

    try{
        const user = await userDao.getUserbyEmail(email)
        if(user.length === 0){
            return res.status(404).send({message: "User not found"})
        }

        const userPassword = md5(password)
        [user] = user
        if(user.password === !userPassword){
            return res.status(401).send({message: "Invalid password"})
        }

        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn:'1h'})
        console.log(token)
        return res.status(200).send({token})

    }catch(error){
        res.status(500).send({message: error.message})
    }
}

module.exports = userController;