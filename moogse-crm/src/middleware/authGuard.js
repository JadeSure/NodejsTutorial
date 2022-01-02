const { validateToken } = require('../utils/jwt')
module.exports = (req, res, next) => {
    const authHeader = req.header('Authorization')
    // console.log('for testing', authHeader)
    if (!authHeader) {
        return res.sendStatus(401)
    }

    const contentArray = authHeader.split(' ')
    if (contentArray.length !== 2 || contentArray[0] !== 'Bearer') {
        return res.sendStatus(401)
    }

    const decoded = validateToken(contentArray[1]);
    if (decoded) {
        req.user = decoded
        return next()
    }
    return res.setStatus(401)

}