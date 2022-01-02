module.exports = (req, res, next) => {
    let { id } = req.params;
    req.params.id = Number(id);
    next();
}

// function foo(obj){
//     const newObj = {...obj};
//     newObj.xx = 0;
//     return newObj;
// }

// function parseId(req, res, next){};
// module.exports = parseId;