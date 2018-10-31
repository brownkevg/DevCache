const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
});

app.post("/api/posts", (req, res, next) => {
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message: 'Post added successfully.'
    });
});

app.use('/api/posts',(req, res, next) => {
    const posts = [
        {
            id: '123blahblahid', 
            title: 'First server-side post', 
            content: 'Blah blah blah'
        },
        {
            id: '223blahblahduh', 
            title: 'Second server-side post', 
            content: 'Blah mah blah blah'
        },
        {
            id: '921lahblahid', 
            title: 'Third server-side post', 
            content: '3 Blah blah blah'
        }
    ];
    res.status(200).json({
        message: 'Posts fetched successfully!',
        posts: posts
    });
});

module.exports = app;