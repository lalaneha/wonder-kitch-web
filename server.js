const express = require('express');
const app = express();
const cors = require('cors')

var corsOptions = {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"]
}
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/fileProcess', (req, res)=> {
    console.log(req.body);
    res.json({success:true});
});

app.listen(3003, (err)=> {
    if(err)throw err;


    console.log('WORKING')
})