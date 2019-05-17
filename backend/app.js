const express = require('express');
const bodyparser = require('body-parser');
const Post = require('./models/posts');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

mongoose.connect("mongodb://localhost:27017/mean", { useNewUrlParser: true })
.then(()=>{console.log("MongoDb Connection Successfull")})
.catch((error)=>{console.log(error)});

app.use(cors());
app.use(bodyparser.json())

app.post('/api/post/',(req,res,next)=>{
    const post = new Post({
        title:req.body.title,
        content:req.body.content
    });
    post.save().then((createdPost =>{
        console.log(post);
        res.status(201).json({
            message:'Post Created',
            postId: createdPost._id
        });
    })
    );
})
app.get('/api/post/',(req,res,next)=>{
    Post.find()
    .then( documents =>{
        res.status(200).json({
                message:'Posts fetched succesfully',
                posts: documents
            });
    });
})
app.delete('/api/post/:id',(req,res,next)=>{
    Post.deleteOne({_id: req.params.id}).then((response)=>{
        console.log(response);
        res.status(200).json({message:'Post deleted !!'});
    })
    
})

module.exports = app