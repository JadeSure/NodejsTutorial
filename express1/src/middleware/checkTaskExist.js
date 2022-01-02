const { getTaskById } = require('../models/task')
module.exports = (req, res, next) => {
    const { id } = req.params
    const task = getTaskById(id);

    // fail fast
    if (!task) {
        return res.sendStatus(404);
    }
    return next();
}