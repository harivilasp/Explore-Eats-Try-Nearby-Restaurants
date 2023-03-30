const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

//  @desc Register new users 
//  @route Post /api/users
//  @access Public
const registerUser = asyncHandler(async (req,res) => {
    const { name, email, password } = req.body // getting all the fields

    // Can make this more specific for each missing field
    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all the fields')
    }

    // Check if user exists
    const userExists = await User.findOne({email})
    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Hashing the password

    const salt = await bcrypt.genSalt(10) // to hash the pass
    const hashPassword = await bcrypt.hash(password, salt)

    // Create user 
    const user = await User.create({
        name,
        email,
        password: hashPassword
    })

    if(user) {
        res.status(201).json({ // everything is OK and we send the following values back
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid data') 
    }
    // res.json({message: 'Register User' })
})

//  @desc Authenticate a user
//  @route Post /api/users/login
//  @access Public
const loginUser = asyncHandler(async (req,res) => {
    const {email, password} = req.body // getting the information from the user

    // First verify that the user exists
    const user = await User.findOne({email})

    // Comparing the passwords using their hashed values 
    if(user && (await bcrypt.compare(password, user.password))) {
        // sending back the following fields after login successful
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        // Password incorrect or user not found or some other error
        res.status(400)
        throw new Error('Invalid Credentials')
    }
    // res.json({message: 'Login User' })
})

//  @desc Get user data
//  @route Get /api/users/me
//  @access Public
const getMe = asyncHandler(async (req,res) => {
    // Since we are getting the req.user,  userid from our authMiddleware,we can use it here since it's redirecting us here.
    const {_id, name, email} = await User.findById(req.user.id) // We can all fetch others fields 

    res.status(200).json({
        id: _id,
        name,   // if we want to show name:name, can just write name
        email
    })
    // res.json({message: 'User Data' })
})


// To generate a JWT token 
const generateToken = (id) => { // Our token will be payload_id(userID) + secret + expireDuration
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d', 
    })
}


module.exports = {
    registerUser, loginUser, getMe
}