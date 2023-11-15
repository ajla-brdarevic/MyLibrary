const User = require('../models/User')
const {hashPassword, comparePassword} = require('../helpers/auth')

const test = (req, res) => {
    res.json('test is working')
}

//Registre endpoint
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        //Check if name was entered
        if (!name) {
            return res.json({
                error: 'Name is required'
            })
        };
        //Check if password is good
        if (!password || password.length < 8) {
            return res.json({
                error: 'Password is required and it should be at least 8 characters long'
            })
        };
        //Check email
        // Check if a user with the provided email already exists in the database
        const exists = await User.findOne({ email });

        // If a user with the email already exists, send a response with an error message
        if (exists) {
            return res.json({
                error: 'Email is taken already'
            });
        }

        const hashedPassword = await hashPassword(password)
        // Create a new user in the database with the provided name, email, and password
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        return res.json(user)

    } catch (error) {
        console.log(error)
    }
};

//Login endpoint
const loginUser = async (req, res) => {
    try{
        const {email, password} = req.body;

        //Check if user exists
        const user = await User.findOne({email});
        if(!user){
            return res.json({
                error: 'No user found'
            })
        }

        //Check if passwords match
        const match = await comparePassword(password, user.password)
        if(match) {
            //JSON Web Token
            res.json('passwords match')
        }
    }catch (error){
        console.log(error)
    }
}

module.exports = {
    test,
    registerUser,
    loginUser
}