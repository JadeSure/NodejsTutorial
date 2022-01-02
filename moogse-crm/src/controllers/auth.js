const User = require('../models/user')
const { validateToken, generateToken } = require('../utils/jwt')

async function login(req, res) {
    const { username, password } = req.body
    const existingUser = await User.findOne({ username })

    if (!existingUser) {
        return res.sendStatus(401).json("invalid username or password")
    }

    if (! await existingUser.validatePassword(password)) {
        return res.sendStatus(401).json("invalid username or password")
    }

    const token = generateToken({ id: existingUser._id })
    return res.json({ token })
}

module.exports = { login }