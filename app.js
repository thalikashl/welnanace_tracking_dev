var express = require('express')
var indexRouter = require("./routes/index.js");

var app = express()
app.set('views','views')
app.set('views engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.use('/', indexRouter)

app.listen(3000, () => {
    console.log('express is running on port 3000');
});

