const profile = require("../../DB/ProfileModel")
const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
require('dotenv').config();
const SECRET = process.env.SECRET_KEY;


exports.ProfileInfo = async (req, res) =>{
    try{
        
            const id = await req._id
            const data  =  await profile.findById(id)
            
            if(data!= null){
                res.send(data)
            }
            else{
                res.send({message:"no data found"})
            }
        }
        catch(err){
            res.send({message:"api fail"})
        }
}

exports.SignUp = async (req, res) =>{
    try{
            const data = await profile(req.body) 
            await data.save()
            res.status(200).send(data)
    }
    catch{
        res.Status(500).send({message:"fail to add data"})
    }   

}

exports.Login = async (req, res) =>{
    try {

                    const { email, password } = req.body;
                    const user = await profile.findOne({ email });

                    if (!user) {
                        return res.status(404).send({ message: 'User not found' });
                    }   
                    if (password.toString() !=  user.password.toString()) {
                        return res.status(400).send({ message: 'Invalid password' });
                    }

               
                    const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: '24h' });
                    return res.status(200).json({ token });
               

        } catch (error) {
            console.error("Error in login API:", error);
            return res.status(500).send({ message: "Internal Server Error" });
        }
}