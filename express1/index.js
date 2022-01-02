require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./src/routes');
const morgan = require('morgan')
const logger = require('./src/utils/logger')
const PORT = process.env.PORT || 3000
const app = express();
const swaggerDoc = require('./src/utils/swagger')
const swaggerUi = require('swagger-ui-express')


app.use(
    process.env.NODE_ENV === 'production' ? morgan('common') : morgan('dev')
)
app.use(express.json())
app.use(cors())
app.use(morgan('common'))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
app.use('/api', router)

app.get('/', (req, res) => {
    res.send('Hello')
})
app.listen(PORT, () => {
    logger.debug('debug info')

    logger.info("server listening at point 3000");
})
// app.use('/v1', router)
// app.use('/v2', router)

// function cors(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', '*');
//     res.setHeader('Access-Control-Allow-Methods', '*');
//     next();
// }

// benefits:
// 1. blocking: ==> none-blocking
// 2. save logs in database...

// wiston level 1 => 4
// error
// warning
// info
// debug: during development