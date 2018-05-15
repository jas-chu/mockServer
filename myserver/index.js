const express = require('express')
var bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/', (request, response) => {
	console.log("get")
  	response.send('{}')
})

app.post('/', (request, response) => {
	console.log(JSON.stringify(request.body))
  	response.send('{"code":200}')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
