// Imports

const express = require ('express')
const app = express()
const port = 8080


// listen on port 3000

app.listen(port, () => console.info('listening on port  ${port}'))
app.listen(3000, function () { console.log('Listening on port 3000!') })

//static flie

app.use(express.static('pubilc'))
app.use('style', express.static(__dirname + 'pubilc/style'))
app.use('img', express.static(__dirname + 'pubilc/img'))



app.get('', (req, res) => {
    res.render('index')
})