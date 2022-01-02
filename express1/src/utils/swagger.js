const swaggerJsdoc = require('swagger-jsdoc')

module.exports = () => ({
    definitions: {
        openapi: '3.0.0',
        info: {
            title: 'Sure tasks api',
            version: '1.0.0',
            contact: {
                name: 'Shawn',
                email: 'jadesure17@gmail.com'
            }
        }
    },
    apis: ['./src/controllers/*.js']
})

