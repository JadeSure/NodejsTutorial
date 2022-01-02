module.exports = (error, req, res, next) => {

    if (error.name === 'ValidationError') {
        return res.status(400).json(error.detail[0].message);
    }
    next(error)

    // last error handle and save res in log
    // winston log => monitoring system
    // return res.status(500).send('sth bad')
}