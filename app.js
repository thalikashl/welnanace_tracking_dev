// Imports

const express = require ('express')
const app = express()
const port = 3000


// listen on port 3000

app.listen(port, () => console.info('listening on port  ${port}'))

//static flie

app.use(express.static('pubilc'))
app.use('style', express.static(__dirname + 'pubilc/style'))
app.use('img', express.static(__dirname + 'pubilc/img'))

app.get('', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})