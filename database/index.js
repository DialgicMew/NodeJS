const express = require('express')
const app = express()
const PostHandler = require('./routes/PostHandler')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://DialgicMew:<password>@cluster0-ircxm.mongodb.net/test?retryWrites=true&w=majority', () => console.log('Connected to database'))

app.use('/posts', PostHandler)

app.get('/', (req, res) => {
    res.send('Root Directory')
})

app.listen(3000, () => console.log('Server is running'))