const authGuard = require('../../../src/middleware/authGuard')
const { generateToken } = require('../../../src/utils/jwt')

// const { validateToken } = require('../utils/jwt')
// module.exports = (req, res, next) => {
//     const authHeader = req.header('Authorization')
//     if (!authHeader) {
//         return res.sendStatus(401)
//     }

//     const contentArray = authHeader.split(' ')
//     if (contentArray.length !== 2 || contentArray[0] !== 'Bearer') {
//         return res.sendStatus(401)
//     }

//     const decoded = validateToken(contentArray[1]);
//     if (decoded) {
//         req.user = decoded
//         return next()
//     }
//     return res.setStatus(401)

// }

describe('The auth guard middleware', () => {
    it('should return 401 if authorization header is missing', () => {
        const req = {
            header: jest.fn().mockReturnValue('Authorization')
        }

        const res = {
            sendStatus: jest.fn()
        }

        const next = jest.fn();
        authGuard(req, res, next)

        expect(req.header).toHaveBeenCalledWith('Authorization')
        expect(res.sendStatus).toHaveBeenCalledWith(401)
    })

    it('should call next if token is valid', () => {
        const token = generateToken({ id: "xxx" })
        const req = {
            header: jest.fn().mockReturnValue(`Bearer ${token}`)
        }

        const res = {
            sendStatus: jest.fn()
        }

        const next = jest.fn();
        authGuard(req, res, next)

        expect(next).toHaveBeenCalledWith('Authorization')
    })
})