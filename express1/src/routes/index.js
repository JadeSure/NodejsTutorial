const express = require('express');
const router = express.Router();
const taskRouter = require('./task')

// big resouce url; eg. tasks or users
router.use("/tasks", taskRouter)
module.exports = router;
