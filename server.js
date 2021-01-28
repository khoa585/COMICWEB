require("dotenv").config();
let express = require("express");
const next  = require("next");
const dev = process.env.NODE_ENV != 'production'
const app = next({dev});
const path = require("path");
const cookieParser = require('cookie-parser')
const routers = require("./routers");
const cors = require('cors');
const handle = routers.getRequestHandler(app);
app.prepare().then(()=>{
    const server  = express();
    server.use(cookieParser());
    server.use("/static", express.static(__dirname + "/static"));
    server.use(handle);
    server.listen(process.env.PORT || 3000,()=>{
        console.log("App running On  http://localhost:"+ process.env.PORT )
    })
})
