const bcrypt = require('bcryptjs')
const {StatusCodes} = require('http-status-codes')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

const register = async (req,res)=>{

    // upload to db
    const user = await User.create({...req.body})
    //generating token
    const token = jwt.sign({userId: user._id,
                     name: user.name},'jwtSecret',
                     {
                         expiresIn:'30d'
                     })

    res.status(StatusCodes.CREATED).json({user:{name:user.name}, token})


}

const login = async (req,res)=>{
    res.send('User logged in ')

}

module.exports = {register,login}
