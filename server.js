const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send("Hello from server")
})
app.get('/post', (req, res) => {
    res.send("Hello from post")
})


app.listen(2000, () => console.log("Server started on 2000"))
 


