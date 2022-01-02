


// +++++++++++++++++============
// application.method(path, route handler => callback)
// app.get('/', function(req, res){
//     // req: 与请求的相关信息，eg. route, content of body, 
//     // res.send('Hello World')
//     res.json([])
// })

// get data from request
//1. req.body(require app.use(express.json())) => post, put, patch -> create or update
// 2. req.params(route param) -> get, put, patch, delete -> mostly id
// 3. req.query -> get -> filtering
// app.post('/', (req, res) => {
// res.json(req.body)

// localhost:3000/shawn?title=shuo
// const { name } = req.params
// const { title } = req.query

// respond
// res.json -> 200
// res.send -> 200
// res.sendStatus(201) -> 201
// res.status(201).json([]) -> [], 201
// res.status(401).json(error:"invalid input")
// res.sendStatus(200); // equivalent to res.status(200).send('OK')
// res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
// res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
// res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')

// +++++++++++++++++============






/*
    file structure:
    -- package.json
    -- src
        -- index.js, server.js, app.js
        -- middleware folder, put all the middleware
        -- routes (register main path) (use)
            -- tasks (register branch path) (get, post, put, delete)
            -- users
            -- other resources ...
        -- constrollers (match with routes)
            -- tasks 
            -- users
            -- other resources ...
        -- models (with database for CURD)
            -- tasks 
            -- users
            -- other resources ...
        -- utils: put helper function, shared function 

    controllers => controllers (manager) no more details processing
                => serveices (developer) real logic processing
*/